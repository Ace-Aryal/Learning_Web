import { createPost, updatePost } from "@/lib/actions";
import React from "react";

function BlogForm({ action }: { action: "create" | "update" }) {
  console.log(action);
  return (
    <form
      action={action === "create" ? createPost : updatePost}
      className="w-full max-w-2xl space-y-6"
    >
      <div>
        <label className="block text-gray-700 mb-2">Title</label>
        {action === "create" && (
          <input type="text" className="hidden" name="id" />
        )}
        <input
          type="text"
          name="title"
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter blog title"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Description</label>
        <input
          name="description"
          type="text"
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Short description"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Content</label>
        <textarea
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
        Publish Blog
      </button>
    </form>
  );
}

export default BlogForm;
