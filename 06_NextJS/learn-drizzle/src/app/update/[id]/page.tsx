import BlogForm from "@/components/blog-form";
import React from "react";

async function UpdateBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Update Blog</h1>
      <BlogForm id={id} action="update" />
    </main>
  );
}

export default UpdateBlogPage;
