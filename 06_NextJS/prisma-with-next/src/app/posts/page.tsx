import React from "react";
import { prisma } from "@/lib/db";
import Link from "next/link";
// Note : you can use prisma acceleratot to cache data
export const runtime = "nodejs";
async function PostsPage() {
  const posts = await prisma.post.findMany({
    // where: {
    //   // Published: true, // filtering
    // },
    orderBy: {
      title: "asc",
    },
    select: {
      content: true,
      Published: true,
      publishedAt: true,
      title: true,
      updatedAt: true,
      slug: true,
      // id: false, no need to say false
    },
    // When you use select, only the fields explicitly marked true
    // will be returned, and everything else is excluded by default.
    take: 10, //pagination
    skip: 1, // skip 1st one eg.10 skip first 10 asc order
    // see docs when needed
  });

  const user = await prisma.user.findUnique({
    where: {
      email: "aryaldipesh1@gmail.com",
    },
    include: {
      posts: true,
    },
  });
  const count = await prisma.post.count();
  if (!user) {
    return;
  }
  return (
    <div>
      <h1>All posts ({count})</h1>
      <ul>
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            {" "}
            <br />
            {post.title}
          </Link>
        ))}
        {user?.posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <span>This post is extracted from user </span>
            <h2 style={{ marginBottom: 8 }}>{post?.title}</h2>
            <p>{post.content}</p>
            <p>
              <strong>Published:</strong> {post.Published ? "Yes" : "No"}
            </p>
            <p style={{ fontSize: 12, color: "#666" }}>
              Last updated: {new Date(post.updatedAt).toLocaleString()}
            </p>
            <p style={{ fontSize: 12, color: "#666" }}>
              Published at: {new Date(post.publishedAt).toLocaleString()}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default PostsPage;
