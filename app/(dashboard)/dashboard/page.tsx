import { getUsers } from "@/lib/getUsers";
import UsersTable from "@/components/UsersTable";

export default async function DashboardPage() {
  const users = await getUsers();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 p-8">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">
        Users Dashboard
      </h1>

      <UsersTable users={users} />
    </div>
  );
}
