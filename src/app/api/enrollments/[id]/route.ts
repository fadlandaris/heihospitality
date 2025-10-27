export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { dbConnect } from '../../../../lib/db';
import { Enrollment } from '../../../../models/enrollment';
import { getSession } from '../../../../lib/session';

// Definisikan field yang boleh di-update admin:
type AdminUpdatableKeys =
  | 'firstName'
  | 'lastName'
  | 'whatsapp'
  | 'email'
  | 'address'
  | 'programTitle'
  | 'status'
  | 'age';

type AdminUpdate = Partial<{
  firstName: string;
  lastName: string;
  whatsapp: number | string;
  email: string;
  address: string;
  programTitle: string;
  status: string;
  age: number;
}>;

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession();
  if (!session.admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await dbConnect();

  const { id } = await params;
  const patchUnknown = await req.json();
  const patch = patchUnknown as Record<string, unknown>;

  const allowed: AdminUpdatableKeys[] = [
    'firstName','lastName','whatsapp','email','address','programTitle','status','age'
  ];

  const safePatch: AdminUpdate = {};
  for (const k of allowed) {
    if (k in patch) {
      const val = patch[k];
      switch (k) {
        case 'age':
          if (typeof val === 'number') safePatch.age = val;
          else if (typeof val === 'string' && Number.isInteger(Number(val))) safePatch.age = Number(val);
          break;
        case 'whatsapp':
          if (typeof val === 'number' || typeof val === 'string') safePatch.whatsapp = val;
          break;
        case 'firstName':
          if (typeof val === 'string') safePatch.firstName = val;
          break;
        case 'lastName':
          if (typeof val === 'string') safePatch.lastName = val;
          break;
        case 'email':
          if (typeof val === 'string') safePatch.email = val;
          break;
        case 'address':
          if (typeof val === 'string') safePatch.address = val;
          break;
        case 'programTitle':
          if (typeof val === 'string') safePatch.programTitle = val;
          break;
        case 'status':
          if (typeof val === 'string') safePatch.status = val;
          break;
      }
    }
  }

  const updated = await Enrollment.findByIdAndUpdate(
    id,
    { $set: safePatch },
    { new: true }
  );
  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession();
  if (!session.admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await dbConnect();
  
  const { id } = await params;
  const deleted = await Enrollment.findByIdAndDelete(id);
  if (!deleted) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}