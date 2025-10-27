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

/** Subset key bertipe string murni (bukan number/union) */
type StringOnlyKeys = Exclude<AdminUpdatableKeys, 'age' | 'whatsapp'>;

/** Guard: pastikan key yang di-update termasuk whitelist */
function isAdminUpdateKey(key: string): key is AdminUpdatableKeys {
  const allowed: ReadonlyArray<AdminUpdatableKeys> = [
    'firstName',
    'lastName',
    'whatsapp',
    'email',
    'address',
    'programTitle',
    'status',
    'age',
  ];
  return (allowed as readonly string[]).includes(key);
}

/** Type guard: objek punya properti params (tipe masih unknown) */
function hasParams(o: unknown): o is { params: unknown } {
  return typeof o === 'object' && o !== null && 'params' in (o as Record<string, unknown>);
}

/** Type guard: cek "promise-like" */
function isPromiseLike<T = unknown>(v: unknown): v is Promise<T> {
  return typeof v === 'object' && v !== null && 'then' in (v as Record<string, unknown>);
}

/** Type guard: params object dengan id:string */
function isParamsObj(v: unknown): v is { id: string } {
  if (typeof v !== 'object' || v === null) return false;
  const idVal = (v as { id?: unknown }).id;
  return typeof idVal === 'string';
}

/** Helper universal ambil id dari ctx.params (bisa Promise atau objek biasa) */
async function getIdFromContext(ctx: unknown): Promise<string | undefined> {
  if (!hasParams(ctx)) return undefined;
  const raw = ctx.params;

  const params = isPromiseLike(raw) ? await raw : raw;
  if (!isParamsObj(params)) return undefined;

  return params.id;
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

    // safePatch tanpa "any": gabungan
    // - field string-only disimpan via Record<StringOnlyKeys, string>
    // - field age & whatsapp disimpan via Pick<AdminUpdate, 'age' | 'whatsapp'>
    const safePatch: Partial<Record<StringOnlyKeys, string>> &
      Partial<Pick<AdminUpdate, 'age' | 'whatsapp'>> = {};

    for (const k in patch) {
      if (!isAdminUpdateKey(k)) continue;

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
          // k dipastikan termasuk StringOnlyKeys
          if (typeof val === 'string') {
            const key = k as StringOnlyKeys;
            (safePatch as Partial<Record<StringOnlyKeys, string>>)[key] = val;
          }
          break;
        }
      }
    }

    const updated = await Enrollment.findByIdAndUpdate(
      id,
      { $set: safePatch },
      { new: true }
    );
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
