import { blogSchema, Blog } from "./schema";
export const createPost = async (formData: Blog) => {
  const { title, description, content } = formData;

  const validation = blogSchema.safeParse({
    title,
    description,
    content,
  });
  if (validation.error) {
    return {
      error: "Please provide valid inputs",
    };
  }

  try {
    console.log(formData);
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
export const getPots = async () => {
  try {
    // get logic
    console.log("");
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
  const { id, title, description, content } = formData;
  if (!id) {
    return {
      error: "Id is required",
    };
  }
  const validation = blogSchema.safeParse({
    title,
    description,
    content,
  });
  if (validation.error) {
    return {
      error: "Please provide valid inputs",
    };
  }

  try {
    console.log(formData);
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
