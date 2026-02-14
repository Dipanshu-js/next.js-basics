"use client";
import { useRouter } from "next/navigation";
import { User } from "@/lib/getUsers";

export default function UsersTable({ users }: { users: User[] }) {
  const router = useRouter();

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => router.push(`/dashboard/${user.id}`)}
          className="bg-white/10 backdrop-blur-lg border border-white/20 
          rounded-xl p-5 shadow-lg hover:scale-105 transition cursor-pointer text-white"
        >
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-blue-200">{user.email}</p>
          <p className="text-blue-300 text-sm">{user.company.name}</p>
        </div>
      ))}
    </div>
  );
}
