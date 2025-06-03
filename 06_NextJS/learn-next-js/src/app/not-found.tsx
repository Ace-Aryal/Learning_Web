export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
            <div className="text-center space-y-4">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="text-xl">Page Not Found</p>
                {/* <a
                    href="/"
                    className="inline-block mt-4 px-4 py-2 bg-white text-gray-900 rounded hover:bg-gray-200 transition"
                >
                    Go Home
                </a> */}
            </div>
        </div>
    );
}
