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

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json().catch(() => ({}));

  try {
    const whatsappNum = normalizeWhatsapp(body.whatsapp);

    const ageNum = Number(body.age);
    if (!Number.isInteger(ageNum) || ageNum < 10 || ageNum > 40) {
      return NextResponse.json({ error: 'Usia harus bilangan bulat 10–40.' }, { status: 400 });
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
  } catch (e: any) {
    const msg = e?.message || 'Gagal menyimpan';
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
