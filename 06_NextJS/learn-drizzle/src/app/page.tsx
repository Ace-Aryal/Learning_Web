import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Blogs</h1>
        <Link href="/create">
          {" "}
          <button className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
            Create New Blog
          </button>
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        <div className="p-6 rounded-xl shadow bg-white">
          <h2 className="text-2xl font-semibold">My First Blog</h2>
          <p className="text-gray-600 mt-2 mb-4">
            Short description of this blog goes here...
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition">
              Update
            </button>
            <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition">
              Delete
            </button>
          </div>
        </div>

        <div className="p-6 rounded-xl shadow bg-white">
          <h2 className="text-2xl font-semibold">Another Interesting Post</h2>
          <p className="text-gray-600 mt-2 mb-4">
            More description content here to show lines...
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition">
              Update
            </button>
            <button className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition">
              Delete
            </button>
          </div>
        </div>

        {/* More static blog cards */}
      </div>
    </main>
  );
}
