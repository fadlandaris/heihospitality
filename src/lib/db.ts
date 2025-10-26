import mongoose, { Mongoose } from 'mongoose';

// Pastikan bertipe string dari awal (IIFE)
const uri: string = (() => {
  const v = process.env.MONGODB_URI;
  if (!v || v.length === 0) {
    throw new Error('Missing MONGODB Credentials');
  }
  return v;
})();

declare global {
  // eslint-disable-next-line no-var
  var __mongooseCache:
    | { conn: Mongoose | null; promise: Promise<Mongoose> | null }
    | undefined;
}

const cache =
  globalThis.__mongooseCache ??
  (globalThis.__mongooseCache = { conn: null, promise: null });

export async function dbConnect(): Promise<Mongoose> {
  if (cache.conn) return cache.conn;

  if (!cache.promise) {
    cache.promise = mongoose.connect(uri, { dbName: 'hei_enrollment' });
  }

  cache.conn = await cache.promise;
  return cache.conn;
}
