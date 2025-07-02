import { createPost, getPost, updatePost } from "@/lib/actions";
import React from "react";

async function BlogForm({
  action,
  id,
}: {
  action: "create" | "update";
  id?: string;
}) {
  console.log(action);
  const date = new Date().toDateString().slice(0, 10);
  const defaultValues = {
    title: "",
    description: "",
    content: "",
  };
  if (action === "update") {
    const blogId = Number(id);
    const blog = await getPost(blogId);
    if ("error" in blog) {
      return <p>Error fetching data</p>;
    }
    defaultValues.title = blog.title;
    defaultValues.description = blog.description;
    defaultValues.content = blog.content;
  }
  const { title, description, content } = defaultValues;
  return (
    <form
      action={
        action === "create"
          ? async (formData: FormData) => {
              "use server";
              const title = formData.get("title") as string;
              const description = formData.get("description") as string;
              const content = formData.get("content") as string;

              const submitData = {
                date,
                title,
                description,
                content,
              };
              const res = await createPost(submitData);
              console.log(res);
            }
          : async (formData: FormData) => {
              "use server";
              const title = formData.get("title") as string;
              const description = formData.get("description") as string;
              const content = formData.get("content") as string;
              const submitData = {
                date,
                id,
                title,
                description,
                content,
              };
              const res = await updatePost(submitData);
              console.log(res);
            }
      }
      className="w-full max-w-2xl space-y-6"
    >
      <div>
        <label className="block text-gray-700 mb-2">Title</label>

        <input
          defaultValue={title}
          type="text"
          name="title"
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter blog title"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Description</label>
        <input
          defaultValue={description}
          name="description"
          type="text"
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Short description"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Content</label>
        <textarea
          defaultValue={content}
          name="content"
          rows={6}
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your blog content here..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        {action === "create" ? "Publish Blog" : "Update Blog"}
      </button>
    </form>
  );
}

export default BlogForm;
