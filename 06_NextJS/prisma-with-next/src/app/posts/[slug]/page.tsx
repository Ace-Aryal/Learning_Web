import { prisma } from "@/lib/db";
import React from "react";

async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!post) {
    return null;
  }

  return (
    <div>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 16,
          marginBottom: 16,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
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
    </div>
  );
}

export default Post;
