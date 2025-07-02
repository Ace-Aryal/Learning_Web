import { revalidatePath } from "next/cache";
import { db } from "../../db";
import { blogTable } from "../../db/schema";
import { blogSchema, Blog } from "./schema";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
export const createPost = async (formData: Blog) => {
  const { title, description, content, date } = formData;

  const validation = blogSchema.safeParse({
    title,
    description,
    content,
    date,
  });
  if (validation.error) {
    return {
      error: "Please provide valid inputs",
    };
  }

  try {
    await db.insert(blogTable).values({ title, description, content });
    revalidatePath("/");
    redirect("/");
  } catch (error: unknown) {
    if ((error as any).digest?.startsWith("NEXT_REDIRECT")) throw error;
    if (error && error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Something went wrong",
    };
  }
};
export const getPosts = async () => {
  try {
    // get logic

    const allPosts = await db.select().from(blogTable);
    return allPosts || [];
  } catch (error) {
    if (error && error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Something went wrong",
    };
  }
};

export const updatePost = async (formData: Blog) => {
  const { id, title, description, content, date } = formData;
  if (!id) {
    return {
      error: "Id is required",
    };
  }
  const blogId = Number(id);
  const validation = blogSchema.safeParse({
    title,
    description,
    content,
    date,
  });
  if (validation.error) {
    return {
      error: "Please provide valid inputs",
    };
  }

  try {
    await db
      .update(blogTable)
      .set({
        title,
        description,
        content,
      })
      .where(eq(blogTable.id, blogId));
    revalidatePath("/");
    redirect("/");
  } catch (error: unknown) {
    if ((error as any).digest?.startsWith("NEXT_REDIRECT")) throw error;

    if (error && error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Something went wrong",
    };
  }
};
export const deletePost = async (blogId: number) => {
  if (!blogId) {
    throw new Error("Couldn't delete blog");
  }
  try {
    await db.delete(blogTable).where(eq(blogTable.id, blogId));
    revalidatePath("/");
  } catch (error: unknown) {
    console.error(error);
    if (error && error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Something went wrong",
    };
  }
};

export const getPost = async (id: number) => {
  try {
    const post = await db
      .select()
      .from(blogTable)
      .where(eq(blogTable.id, id))
      .limit(1);
    return post[0];
  } catch (error) {
    if (error && error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Something went wrong",
    };
  }
};
