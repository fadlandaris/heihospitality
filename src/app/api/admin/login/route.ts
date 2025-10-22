import { NextResponse } from 'next/server';
import { getSession } from '../../../../lib/session';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const ENV_EMAIL = process.env.ADMIN_EMAIL!;
  const ENV_PASS  = process.env.ADMIN_PASSWORD!;

  if (!email || !password) {
    return NextResponse.json({ error: 'Email & password required' }, { status: 400 });
  }

  if (email.toLowerCase() !== ENV_EMAIL.toLowerCase() || password !== ENV_PASS) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const session = await getSession();
  session.admin = { email: ENV_EMAIL };
  await session.save();

  return NextResponse.json({ ok: true });
}
