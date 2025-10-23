import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI!;
if (!uri) throw new Error('Missing MONGODB Credentials');

let cached = (global as any).mongoose as {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
} | undefined;

if (!cached) cached = (global as any).mongoose = { conn: null, promise: null };

export async function dbConnect() {
  if (cached!.conn) return cached!.conn;
  if (!cached!.promise) {
    cached!.promise = mongoose.connect(uri, { dbName: 'hei_enrollment' }).then((m: any) => m);
  }
  cached!.conn = await cached!.promise;
  return cached!.conn;
}
