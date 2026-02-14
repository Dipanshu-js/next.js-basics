import { cache } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: { city: string };
  company: { name: string };
};

// 🔥 cache makes it global + reusable
export const getUsers = cache(async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache", // Next caches automatically
  });

  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
});
