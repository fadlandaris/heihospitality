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

// Type guard untuk memastikan `k` adalah kunci yang valid di `AdminUpdate`
function isAdminUpdateKey(key: string): key is keyof AdminUpdate {
  const allowedKeys: AdminUpdatableKeys[] = [
    'firstName', 'lastName', 'whatsapp', 'email', 'address', 'programTitle', 'status', 'age'
  ];
  return allowedKeys.includes(key as AdminUpdatableKeys);
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session.admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();
  const patchUnknown = await req.json();
  const patch = patchUnknown as Record<string, unknown>;

  const safePatch: AdminUpdate = {};

  for (const k in patch) {
    if (isAdminUpdateKey(k)) {
      const val = patch[k];
      switch (k) {
        case 'age':
          if (typeof val === 'number') {
            safePatch.age = val;
          } else if (typeof val === 'string' && Number.isInteger(Number(val))) {
            safePatch.age = Number(val);
          }
          break;
        case 'whatsapp':
          if (typeof val === 'number' || typeof val === 'string') {
            safePatch.whatsapp = val;
          }
          break;
        default:
          if (typeof val === 'string') {
            safePatch[k] = val;
          }
          break;
      }
    }
  }

  const updated = await Enrollment.findByIdAndUpdate(
    params.id,
    { $set: safePatch },
    { new: true }
  );

  if (!updated) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const session = await getSession();
  if (!session.admin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();
  const deleted = await Enrollment.findByIdAndDelete(params.id);

  if (!deleted) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
