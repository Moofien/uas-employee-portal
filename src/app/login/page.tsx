import { login } from "./actions";
import Link from "next/link";

export default async function LoginPage(props: { searchParams: Promise<{ error?: string; message?: string }> }) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form className="w-full max-w-md bg-white p-8 rounded shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Login Karyawan</h1>

        {/* Error / Success Message */}
        {searchParams?.error && <div className="p-3 bg-red-100 text-red-600 rounded">{searchParams.error}</div>}
        {searchParams?.message && <div className="p-3 bg-green-100 text-green-600 rounded">{searchParams.message}</div>}

        <input name="email" type="email" placeholder="Email" required className="w-full p-2 border rounded" />
        <input name="password" type="password" placeholder="Password" required className="w-full p-2 border rounded" />

        <button formAction={login} className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700">
          Masuk
        </button>

        <p className="text-center text-sm">
          Belum punya akun?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Daftar
          </Link>
        </p>
      </form>
    </div>
  );
}
