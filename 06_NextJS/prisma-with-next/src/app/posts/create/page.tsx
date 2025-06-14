import { createPost } from "@/lib/actions";
import React from "react";

function PostForm() {
  return (
    <form action={createPost} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          name="title"
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Content</label>
        <textarea
          name="content"
          rows={5}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input type="checkbox" name="Published" id="Published" />
        <label htmlFor="Published" className="text-sm">
          Published
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default PostForm;
