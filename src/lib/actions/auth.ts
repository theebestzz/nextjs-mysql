"use server";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { SessionPayload } from "../types";

export async function login(email: string, password: string) {
  const secret = process.env.JWT_SECRET!;

  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  const user = (rows as any[])[0];

  if (!user) return { error: "E-posta bulunamadı" };

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return { error: "Şifre hatalı" };

  const token = jwt.sign({ id: user.id, email: user.email }, secret, {
    expiresIn: "1d",
  });

  const cookie = await cookies();

  cookie.set("token", token, { httpOnly: true, maxAge: 60 * 60 * 24 });

  return { success: true };
}

export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as SessionPayload;
    return decoded;
  } catch (err) {
    return null;
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.set("token", "", {
    maxAge: 0,
    httpOnly: true,
  });
}
