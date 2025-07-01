"use server";
import { z } from "zod";
export const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Title is required"),
});
export type Blog = z.infer<typeof blogSchema>;
export const createPost = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const validation = blogSchema.safeParse({
    title,
    description,
    content,
  });
  if (validation.error) {
    throw new Error("Invalid blog format");
  }

  try {
    console.log(formData);
  } catch (error: unknown) {
    console.error(error);
  }
};

export const updatePost = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const content = formData.get("content") as string;
  const validation = blogSchema.safeParse({
    title,
    description,
    content,
  });
  if (validation.error) {
    throw new Error("Invalid blog format");
  }
  try {
    console.log(formData);
    return;
  } catch (error) {
    console.error(error);
  }
};
export const deletePost = async (formData: FormData) => {
  const id = formData.get("id");
  if (!id) {
    return {
      error: "Could't get blog id",
    };
  }
  try {
    console.log({ id });
  } catch (error) {
    console.error(error);
  }
};
