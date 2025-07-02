import BlogForm from "@/components/blog-form";
import Link from "next/link";

export default function CreateBlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <div className="flex flex-start self-start">
        <Link className="primary-btn" href="/">
          Go Back
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Create a New Blog
      </h1>

      <BlogForm action="create" />
    </main>
  );
}
