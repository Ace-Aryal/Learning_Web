import { deletePost, getPosts } from "@/lib/actions";
import Link from "next/link";

export default async function HomePage() {
  const allPosts = await getPosts();
  if ("error" in allPosts) {
    return <p>Error fetching data</p>;
  }
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Blogs</h1>
        <Link href="/create">
          {" "}
          <button className="px-5 py-2 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
            Create New Blog
          </button>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {allPosts.map((blog) => (
          <div key={blog.id} className="p-6 rounded-xl shadow bg-white">
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text-xs mb-4 text-gray-500">
              {blog.createdAt.toDateString()}
            </p>

            <p className="text-gray-600 mt-2 mb-4">{blog.description}</p>
            <div className="flex space-x-4">
              <Link
                href={`posts/${blog.id}`}
                className="px-4 py-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
              >
                Read
              </Link>
              <Link
                href={`/update/${blog.id}`}
                className="px-4 py-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition"
              >
                Update
              </Link>
              <form
                action={async () => {
                  "use server";
                  console.log("this works");
                  await deletePost(blog.id);
                }}
              >
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}

        {/* More static blog cards */}
      </div>
    </main>
  );
}
