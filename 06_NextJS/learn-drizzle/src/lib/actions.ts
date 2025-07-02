import { blogSchema, Blog } from "./schema";
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
    console.log(formData, "creating");
    return {
      success: "Blog created sucesfully",
    };
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
export const getPosts = async (id: string) => {
  try {
    // get logic
    console.log("");
    console.log("id", id);
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
    console.log(formData, "updating");
    return {
      success: "Blog updated sucesfully",
    };
  } catch (error: unknown) {
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
export const deletePost = async (blogId: string) => {
  if (!blogId) {
    throw new Error("Couldn't delete blog");
  }
  try {
    console.log({ blogId });
    return {
      success: "Blog deleted sucesfully",
    };
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
