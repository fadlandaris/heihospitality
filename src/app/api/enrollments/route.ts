export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { dbConnect } from '../../../lib/db';
import { Enrollment } from '../../../models/enrollment';
import { getSession } from '../../../lib/session';

export async function GET() {
  const session = await getSession();
  if (!session.admin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await dbConnect();
  const rows = await Enrollment.find({}).sort({ createdAt: -1 });
  return NextResponse.json(rows);
}

export async function POST() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
