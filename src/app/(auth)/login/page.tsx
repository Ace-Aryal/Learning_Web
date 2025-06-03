import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login page",
    description: "HEllo from login page"
}

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="space-y-4 text-center">
                <h1 className="text-2xl font-bold">Login</h1>
                <form className="space-y-3">
                    <input type="email" placeholder="Email" className="px-4 py-2 rounded text-black" />
                    <input type="password" placeholder="Password" className="px-4 py-2 rounded text-black" />
                    <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
