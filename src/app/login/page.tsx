import LoginForm from "@/components/admin/forms/LoginForm";

import { getSession } from "@/lib/actions/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getSession();

  if (session) {
    redirect("/admin");
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
}
