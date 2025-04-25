"use client";

import { logout } from "@/lib/actions/auth";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="mt-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
    >
      Çıkış Yap
    </button>
  );
}
