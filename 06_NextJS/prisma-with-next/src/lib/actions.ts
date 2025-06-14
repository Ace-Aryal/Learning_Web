"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./db";

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  // use try catch , zod and all safety measures
  await prisma.post.create({
    data: {
      content: formData.get("content") as string,
      title: formData.get("title") as string,
      slug: title.replaceAll(/\s+/g, "-").toLowerCase(),
      author: {
        connect: {
          email: "aryaldipesh1@gmail.com",
        },
      },
    },
  });
  revalidatePath("/posts");
}

export async function editPost(formData: FormData, id: string) {
  await prisma.post.update({
    where: {
      id: id,
    },
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      slug: (formData.get("title") as string)
        .replaceAll(/\s+/g, "-")
        .toLowerCase(),
    },
  });
}
export async function deletePost(formData: FormData, id: string) {
  await prisma.post.delete({
    where: {
      id: id,
    },
  });
}
