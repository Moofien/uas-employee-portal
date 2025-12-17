import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { signout } from "../login/actions";

export default async function DashboardPage() {
  const supabase = await createClient();

  //Ambil User (Proteksi Server Component)
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  //Fetch Announcements
  const { data: announcements } = await supabase.from("announcements").select("*");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded shadow">
          <div>
            <h1 className="text-xl font-bold">Portal Karyawan</h1>
            <p className="text-gray-500 text-sm">Login: {user.email}</p>
          </div>
          <form action={signout}>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
          </form>
        </div>

        <h2 className="text-2xl font-bold mb-4">Pengumuman</h2>
        <div className="grid gap-4">
          {announcements?.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded shadow border-l-4 border-blue-500">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-700 mt-2">{item.content}</p>
              <p className="text-xs text-gray-400 mt-4">{new Date(item.created_at).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
