import { CreateUserForm } from "@/components/admin/forms/CreateForm";
import { UpdateUserForm } from "@/components/admin/forms/UpdateForm";
import { getAllUsers, deleteUser } from "@/lib/actions/user";
import { revalidatePath } from "next/cache";

export default async function UsersPage() {
  const users = await getAllUsers();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Kullanıcılar</h1>

      <CreateUserForm />

      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="rounded border p-4 bg-white shadow">
            <div className="text-lg font-medium">{user.name}</div>
            <div className="text-sm text-gray-600">{user.email}</div>

            <div className="mt-2 flex gap-2">
              <UpdateUserForm user={user} />

              <form
                action={async () => {
                  "use server";
                  await deleteUser(user.id);
                  revalidatePath("/admin/users");
                }}
              >
                <button
                  type="submit"
                  className="rounded bg-red-500 px-4 py-1 text-white hover:bg-red-600"
                >
                  Sil
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
