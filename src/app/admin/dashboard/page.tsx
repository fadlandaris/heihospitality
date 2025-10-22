export default function AdminDashboard() {
  return (
    <main className="max-w-4xl mx-auto pt-16 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <form action="/api/admin/logout" method="post">
          <button className="rounded border px-3 py-1">Logout</button>
        </form>
      </div>
      <p>Halo admin 👋. Nanti di sini kita tampilkan data pendaftaran siswa.</p>
    </main>
  );
}
