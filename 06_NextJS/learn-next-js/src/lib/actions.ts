"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function Addtodb(data: string) {
  const { isAuthenticated } = getKindeServerSession();
  if (!isAuthenticated()) {
    redirect("/api/auth/login");
  }
  console.log(data);
}
