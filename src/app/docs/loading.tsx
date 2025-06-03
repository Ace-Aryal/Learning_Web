export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="flex flex-col items-center gap-4">
                <svg
                    className="animate-spin h-10 w-10 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                </svg>
                <p className="text-lg font-semibold">Loading...</p>
            </div>
        </div>
    );
}
