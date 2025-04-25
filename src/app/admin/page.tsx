import { LogoutButton } from "@/components/admin/LogoutButton";
import { getSession } from "@/lib/actions/auth";

export default async function AdminHome() {
  const session = await getSession();

  return (
    <div>
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="mt-4">Hoş geldin! {session?.email}</p>
      <LogoutButton />
    </div>
  );
}
