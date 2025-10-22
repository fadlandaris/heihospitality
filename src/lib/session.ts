import { cookies } from 'next/headers';
import { getIronSession, type SessionOptions } from 'iron-session';

declare module 'iron-session' {
  interface IronSessionData {
    admin?: { email: string };
  }
}

export const sessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_PASSWORD!,
  cookieName: process.env.IRON_SESSION_COOKIE_NAME!,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export async function getSession() {
  // ✅ Perubahan penting: tambahkan await di sini
  const cookieStore = await cookies();

  const session = await getIronSession<{ admin?: { email: string } }>(
    cookieStore,
    sessionOptions
  );

  return session;
}
