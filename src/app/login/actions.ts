"use server";
// pengganti actions/auth.ts
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

//Login
export async function login(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/login?error=Email atau Password salah");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard"); //Login sukses -> Dashboard
}

//Register
export async function signup(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/register?error=Gagal mendaftar");
  }

  revalidatePath("/", "layout");
  redirect("/login?message=Sukses daftar, silakan login"); //Register sukses -> Login
}

//Logout
export async function signout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/login");
}
