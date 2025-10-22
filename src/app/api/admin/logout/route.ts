// src/app/api/admin/logout/route.ts
import { NextResponse } from 'next/server';
import { getSession } from '../../../../lib/session';

export async function POST(req: Request) {
  const session = await getSession();
  await session.destroy(); // hapus cookie session

  // Redirect ke homepage setelah logout
  const url = new URL('/', req.url);
  return NextResponse.redirect(url);
}

