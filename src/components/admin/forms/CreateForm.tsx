"use client";

import { useState } from "react";
import { createUser } from "@/lib/actions/user";
import { useRouter } from "next/navigation";

export function CreateUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    try {
      await createUser({ name, email });
      alert("Kullanıcı başarıyla eklendi.");
      setName("");
      setEmail("");
      router.refresh();
    } catch (error) {
      alert("Bir hata oluştu.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        className="w-full p-2 border rounded"
        placeholder="Ad Soyad"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full p-2 border rounded"
        type="email"
        placeholder="E-posta"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Kullanıcı Ekle
      </button>
    </form>
  );
}
