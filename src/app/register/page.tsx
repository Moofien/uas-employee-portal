import { signup } from "../login/actions";
import Link from "next/link";

export default async function RegisterPage(props: { searchParams: Promise<{ error?: string }> }) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form className="w-full max-w-md bg-white p-8 rounded shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Daftar Baru</h1>

        {searchParams?.error && <div className="p-3 bg-red-100 text-red-600 rounded">{searchParams.error}</div>}

        <input name="email" type="email" placeholder="Email" required className="w-full p-2 border rounded" />
        <input name="password" type="password" placeholder="Password (min 6 karakter)" required className="w-full p-2 border rounded" />

        <button formAction={signup} className="w-full bg-green-600 text-white py-2 rounded font-bold hover:bg-green-700">
          Daftar
        </button>

        <p className="text-center text-sm">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
