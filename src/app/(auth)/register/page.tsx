import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute: "Sign up page" // this overwrites all the titles and takes absolute value
  }
}
export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <form className="space-y-3">
          <input type="text" placeholder="Name" className="px-4 py-2 rounded text-black" />
          <input type="email" placeholder="Email" className="px-4 py-2 rounded text-black" />
          <input type="password" placeholder="Password" className="px-4 py-2 rounded text-black" />
          <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
