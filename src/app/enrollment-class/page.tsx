'use client';
import { useState } from 'react';
import { programData } from '@/data/data'; // pastikan file ini ada dan export programData seperti yang kamu kirim

export default function EnrollmentFormPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', whatsapp: '', email: '', address: '', programTitle: ''
  });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const programs = programData.map(p => p.title);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setErr(null); setOk(null);

    const res = await fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      setErr(j.error || 'Gagal mengirim pendaftaran');
      return;
    }
    setOk('Pendaftaran berhasil dikirim. Kami akan menghubungi Anda via WhatsApp/email.');
    setForm({ firstName:'', lastName:'', whatsapp:'', email:'', address:'', programTitle:'' });
  }

  return (
    <main className="max-w-2xl mx-auto pt-16 px-4">
      <h1 className="text-2xl font-semibold mb-6">Form Pendaftaran</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input className="border rounded px-3 py-2" placeholder="Nama depan"
            value={form.firstName} onChange={e=>setForm(f=>({...f, firstName:e.target.value}))} required />
          <input className="border rounded px-3 py-2" placeholder="Nama belakang"
            value={form.lastName} onChange={e=>setForm(f=>({...f, lastName:e.target.value}))} required />
        </div>
        <input className="border rounded px-3 py-2 w-full" placeholder="WhatsApp"
          value={form.whatsapp} onChange={e=>setForm(f=>({...f, whatsapp:e.target.value}))} required />
        <input type="email" className="border rounded px-3 py-2 w-full" placeholder="Email"
          value={form.email} onChange={e=>setForm(f=>({...f, email:e.target.value}))} required />
        <textarea className="border rounded px-3 py-2 w-full" placeholder="Alamat rumah"
          value={form.address} onChange={e=>setForm(f=>({...f, address:e.target.value}))} required />
        <select className="border rounded px-3 py-2 w-full"
          value={form.programTitle}
          onChange={e=>setForm(f=>({...f, programTitle:e.target.value}))}
          required
        >
          <option value="">Pilih program...</option>
          {programs.map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        {err && <p className="text-red-600 text-sm">{err}</p>}
        {ok  && <p className="text-green-700 text-sm">{ok}</p>}

        <button disabled={loading} className="bg-black text-white rounded px-4 py-2">
          {loading ? 'Mengirim…' : 'Kirim Pendaftaran'}
        </button>
      </form>
    </main>
  );
}
