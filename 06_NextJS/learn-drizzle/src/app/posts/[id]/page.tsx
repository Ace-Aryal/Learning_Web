import { getPost } from "@/lib/actions";
import Link from "next/link";
import React from "react";

async function ReadBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogId = Number(id);
  const blog = await getPost(blogId);
  if ("error" in blog) {
    return <p>Error fetching data</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="flex flex-start self-start">
        <Link className="primary-btn" href="/">
          Go Back
        </Link>
      </div>
      <h1 className="text-4xl font-bold ">{blog.title}</h1>
      <p className="text-xs  text-gray-500">{blog.createdAt.toDateString()}</p>

      <p className="text-lg text-gray-600 mb-8">{blog.description}</p>
      <div className="prose prose-lg text-gray-800">{blog.content}</div>
    </div>
  );
}

export default ReadBlogPage;
