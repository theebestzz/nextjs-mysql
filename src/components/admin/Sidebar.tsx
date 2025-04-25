"use client";

import Link from "next/link";

import { Users } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-6 flex flex-col">
      <Link href={"/admin"} className="text-2xl font-bold mb-8">
        Admin Panel
      </Link>
      <nav className="flex flex-col gap-4">
        <Link
          href="/admin/users"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
        >
          <Users size={20} />
          Kullanıcılar
        </Link>
      </nav>
    </div>
  );
}
