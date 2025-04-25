"use client";

import { useState } from "react";
import { updateUser } from "@/lib/actions/user";
import { useRouter } from "next/navigation";
import { User } from "@/lib/types";

export function UpdateUserForm({ user }: { user: User }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateUser(user.id, { name, email });
      alert("Kullanıcı güncellendi.");
      setEditing(false);
      router.refresh();
    } catch (error) {
      alert("Güncelleme sırasında hata oluştu.");
    }
  };

  if (!editing) {
    return (
      <button
        onClick={() => setEditing(true)}
        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Güncelle
      </button>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2 mt-2"
    >
      <input
        className="p-1 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="p-1 border rounded"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        Kaydet
      </button>
      <button
        type="button"
        onClick={() => setEditing(false)}
        className="bg-gray-400 text-white px-3 py-1 rounded"
      >
        Vazgeç
      </button>
    </form>
  );
}
