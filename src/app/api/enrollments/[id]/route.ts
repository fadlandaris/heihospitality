// src/app/api/enrollments/[id]/route.ts
export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { dbConnect } from '../../../../lib/db';
import { Enrollment } from '../../../../models/enrollment';
import { getSession } from '../../../../lib/session';

/** ====== Field yang boleh di-update admin ====== */
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

/** Guard: pastikan key yang di-update termasuk whitelist */
function isAdminUpdateKey(key: string): key is AdminUpdatableKeys {
  const allowed: AdminUpdatableKeys[] = [
    'firstName',
    'lastName',
    'whatsapp',
    'email',
    'address',
    'programTitle',
    'status',
    'age',
  ];
  return allowed.includes(key as AdminUpdatableKeys);
}

/** Helper universal ambil id dari ctx.params (bisa Promise atau objek biasa) */
async function getIdFromContext(ctx: unknown): Promise<string | undefined> {
  // @ts-ignore — kita sengaja permissive agar kompatibel lintas versi
  const raw = (ctx as any)?.params;
  if (!raw) return undefined;

  // Jika Promise, tunggu dulu
  const params = typeof raw?.then === 'function' ? await raw : raw;
  return params?.id as string | undefined;
}

/** ====== PATCH /api/enrollments/[id] ======
 * Update sebagian field by Admin (whitelist + sanitasi)
 */
export async function PATCH(req: Request, ctx: unknown) {
  try {
    const id = await getIdFromContext(ctx);
    if (!id) {
      return NextResponse.json({ error: 'Bad Request: missing id' }, { status: 400 });
    }

    const session = await getSession();
    if (!session?.admin) {
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
          case 'age': {
            if (typeof val === 'number') {
              safePatch.age = val;
            } else if (typeof val === 'string' && Number.isInteger(Number(val))) {
              safePatch.age = Number(val);
            }
            break;
          }
          case 'whatsapp': {
            if (typeof val === 'number' || typeof val === 'string') {
              safePatch.whatsapp = val;
            }
            break;
          }
          default: {
            if (typeof val === 'string') {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (safePatch as any)[k] = val;
            }
            break;
          }
        }
      }
    }

    const updated = await Enrollment.findByIdAndUpdate(id, { $set: safePatch }, { new: true });
    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: 'Internal Server Error', detail: msg },
      { status: 500 }
    );
  }
}

/** ====== DELETE /api/enrollments/[id] ======
 * Hapus 1 enrollment by id, hanya Admin
 */
export async function DELETE(_req: Request, ctx: unknown) {
  try {
    const id = await getIdFromContext(ctx);
    if (!id) {
      return NextResponse.json({ error: 'Bad Request: missing id' }, { status: 400 });
    }

    const session = await getSession();
    if (!session?.admin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    const deleted = await Enrollment.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: 'Internal Server Error', detail: msg },
      { status: 500 }
    );
  }
}
