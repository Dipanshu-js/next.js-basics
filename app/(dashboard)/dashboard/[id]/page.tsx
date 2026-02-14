import { getUsers } from "@/lib/getUsers";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function UserDetails({ params }: Props) {
  const { id } = await params;

  // 🔥 using SAME cached data
  const users = await getUsers();
  const user = users.find((u) => u.id === Number(id));

  if (!user) return <div>User not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex justify-center items-center p-8">
      <div
        className="bg-white/10 backdrop-blur-lg border border-white/20 
      rounded-2xl p-8 shadow-2xl text-white w-full max-w-xl"
      >
        <h1 className="text-3xl font-bold mb-6">{user.name}</h1>

        <div className="space-y-3 text-lg">
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Phone:</b> {user.phone}
          </p>
          <p>
            <b>Website:</b> {user.website}
          </p>
          <p>
            <b>City:</b> {user.address.city}
          </p>
          <p>
            <b>Company:</b> {user.company.name}
          </p>
        </div>
      </div>
    </div>
  );
}
