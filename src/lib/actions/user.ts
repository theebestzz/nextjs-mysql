"use server";

import { db } from "@/lib/db";
import { User, NewUser } from "@/lib/types";

// Tüm kullanıcıları getir
export async function getAllUsers(): Promise<User[]> {
  const [rows] = await db.query("SELECT * FROM users");
  return rows as User[];
}

// ID ile kullanıcı getir
export async function getUserById(id: number): Promise<User | null> {
  const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
  const user = (rows as User[])[0];
  return user || null;
}

// Yeni kullanıcı oluştur
export async function createUser(user: NewUser): Promise<User> {
  const [result] = await db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [user.name, user.email]
  );
  const insertId = (result as any).insertId;
  return { id: insertId, ...user };
}

// Kullanıcı güncelle
export async function updateUser(id: number, data: NewUser): Promise<User> {
  await db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [
    data.name,
    data.email,
    id,
  ]);
  return { id, ...data };
}

// Kullanıcı sil
export async function deleteUser(
  id: number
): Promise<{ message: string; id: number }> {
  await db.query("DELETE FROM users WHERE id = ?", [id]);
  return { message: "Kullanıcı silindi", id };
}
