'use client';
import { useEffect, useState } from 'react';
import { programData } from '@/data/data';

type Row = {
  _id: string;
  firstName: string;
  lastName: string;
  whatsapp: string;
  email: string;
  address: string;
  programTitle: string;
  status: string;
  createdAt: string;
};

const STATUSES = ['applied','screening','interview','accepted','rejected','enrolled'];
const PROGRAM_TITLES = programData.map(p => p.title);

export default function AdminDashboard() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch('/api/enrollments', { cache: 'no-store' });
    if (res.ok) setRows(await res.json());
    setLoading(false);
  }
  useEffect(() => { load(); }, []);

  async function update(id: string, patch: Partial<Row>) {
    const res = await fetch(`/api/enrollments/${id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patch),
    });
    if (res.ok) load();
  }

  async function remove(id: string) {
    if (!confirm('Hapus data ini?')) return;
    const res = await fetch(`/api/enrollments/${id}`, { method: 'DELETE' });
    if (res.ok) load();
  }

  return (
    <main className="max-w-6xl mx-auto pt-16 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <form action="/api/admin/logout" method="post">
          <button className="rounded border px-3 py-1">Logout</button>
        </form>
      </div>

      {loading ? <p>Loading…</p> : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Nama</th>
                <th className="text-left">WhatsApp</th>
                <th className="text-left">Email</th>
                <th className="text-left">Alamat</th>
                <th className="text-left">Program</th>
                <th className="text-left">Status</th>
                <th className="text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r._id} className="border-b">
                  <td className="py-2">{r.firstName} {r.lastName}</td>
                  <td>{r.whatsapp}</td>
                  <td>{r.email}</td>
                  <td className="max-w-[220px] truncate" title={r.address}>{r.address}</td>
                  <td>
                    <select
                      value={r.programTitle}
                      onChange={e=>update(r._id, { programTitle: e.target.value })}
                      className="border rounded px-2 py-1"
                    >
                      {PROGRAM_TITLES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </td>
                  <td>
                    <select
                      value={r.status}
                      onChange={e=>update(r._id, { status: e.target.value })}
                      className="border rounded px-2 py-1 capitalize"
                    >
                      {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td>
                    <button onClick={()=>remove(r._id)} className="text-red-600">Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
