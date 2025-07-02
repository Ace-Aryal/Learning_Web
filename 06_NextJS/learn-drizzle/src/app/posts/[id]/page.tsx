import { getPosts } from "@/lib/actions";
import Link from "next/link";
import React from "react";
const blog = {
  title: "Understanding React Server Components",
  description: "A quick dive into how RSCs change the way we build apps.",
  date: "2025-1-1",
  content: `
      React Server Components allow developers to offload rendering to the server,
      sending minimal data to the client. This enables smaller bundles, faster loads,
      and new patterns for fetching data. Combined with Next.js, this changes how we
      approach building full-stack applications.
    `,
};
async function ReadBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogres = await getPosts(id);
  console.log(blogres);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="flex flex-start self-start">
        <Link className="primary-btn" href="/">
          Go Back
        </Link>
      </div>
      <h1 className="text-4xl font-bold ">{blog.title}</h1>
      <p className="text-xs mb-4 text-gray-500">{blog.date}</p>
      <p className="text-lg text-gray-600 mb-8">{blog.description}</p>
      <div className="prose prose-lg text-gray-800">{blog.content}</div>
    </div>
  );
}

export default ReadBlogPage;
