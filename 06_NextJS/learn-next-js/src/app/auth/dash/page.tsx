"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const { isAuthenticated } = useKindeBrowserClient();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth");
    }
  }, [isAuthenticated]);

  // const user = getUser()
  //   const { isAuthenticated, getUser } = useKindeBrowserClient();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You will write your server action call here
    // For now just update local state

    setItems((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add something..."
          className="flex-1 px-4 py-2 border border-input rounded-md bg-background text-foreground"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-primary  rounded-md hover:bg-primary/90"
        >
          Add
        </button>
      </form>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="border border-border rounded-md px-4 py-2 bg-accent text-accent-foreground"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
