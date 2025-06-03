export default function ForgetPasswordPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="space-y-4 text-center">
                <h1 className="text-2xl font-bold">Forgot Password</h1>
                <form className="space-y-3">
                    <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded text-black" />
                    <button type="submit" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}
