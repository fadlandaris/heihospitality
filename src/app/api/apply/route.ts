import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import { Enrollment } from '@/models/enrollment';

export const runtime = 'nodejs';

function normalizeWhatsapp(raw: string): number {
  const digits = String(raw || '').replace(/\D/g, '');
  let n = digits;
  if (n.startsWith('0')) n = '62' + n.slice(1);
  if (n.length < 10 || n.length > 14) {
    throw new Error('WhatsApp number must be 10-14 digit');
  }
  const num = Number(n);
  if (!Number.isSafeInteger(num)) {
    throw new Error('Your whatsap number is not valid');
  }
  return num;
}

type NewEnrollmentPayload = {
  firstName: string;
  lastName: string;
  whatsapp: string;          // diterima sebagai string, dinormalisasi ke number
  email: string;
  address: string;
  programTitle: string;
  age: number | string;      // bisa datang sebagai string dari form
};

export async function POST(req: Request) {
  await dbConnect();

  const bodyUnknown = await req.json().catch(() => ({}));
  const body = bodyUnknown as Partial<NewEnrollmentPayload>;

  try {
    const whatsappNum = normalizeWhatsapp(String(body.whatsapp ?? ''));

    const ageNum = Number(body.age);
    if (!Number.isInteger(ageNum) || ageNum < 10 || ageNum > 40) {
      return NextResponse.json({ error: 'Usia harus bilangan bulat 10–40.' }, { status: 400 });
    }

    // (opsional) validasi minimal field wajib
    const requiredFields: (keyof NewEnrollmentPayload)[] = [
      'firstName','lastName','email','address','programTitle'
    ];
    for (const f of requiredFields) {
      if (!body[f]) return NextResponse.json({ error: `Field ${String(f)} wajib diisi` }, { status: 400 });
    }

    const doc = await Enrollment.create({
      firstName: body.firstName,
      lastName: body.lastName,
      whatsapp: whatsappNum,
      email: body.email,
      address: body.address,
      programTitle: body.programTitle,
      age: ageNum,
    });

    return NextResponse.json({ ok: true, id: doc._id });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Gagal menyimpan';
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
