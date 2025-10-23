import { NextResponse } from 'next/server';
import { dbConnect } from '../../../lib/db';
import { Enrollment } from '../../../models/enrollment';

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json().catch(() => ({}));
  const { firstName, lastName, whatsapp, email, address, programTitle } = body;

  if (!firstName || !lastName || !whatsapp || !email || !address || !programTitle) {
    return NextResponse.json({ error: 'Semua field wajib diisi.' }, { status: 400 });
  }

  const doc = await Enrollment.create({ firstName, lastName, whatsapp, email, address, programTitle });
  return NextResponse.json({ ok: true, id: doc._id });
}
