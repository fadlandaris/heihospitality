export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { dbConnect } from '../../../../lib/db';
import { Enrollment } from '../../../../models/enrollment';
import { getSession } from '../../../../lib/session';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session.admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await dbConnect();
  const patch = await req.json();

  // optional: batasi field yang boleh di-update admin
  const allowed: (keyof typeof patch)[] = ['firstName','lastName','whatsapp','email','address','programTitle','status', 'age'];
  const safePatch: any = {};
  for (const k of allowed) if (k in patch) safePatch[k as string] = (patch as any)[k];

  const updated = await Enrollment.findByIdAndUpdate(params.id, { $set: safePatch }, { new: true });
  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session.admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await dbConnect();
  const deleted = await Enrollment.findByIdAndDelete(params.id);
  if (!deleted) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
