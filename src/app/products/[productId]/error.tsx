"use client"

// type ErrorProps = {
//     message?: string;
// };
// by doing this in every component or page others will still run without breaking , our navbar , footer a, sidebar and other components will stil work
import { startTransition } from "react";
import { useRouter } from "next/navigation"; // its from navigation not router
export default function ErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {
    const router = useRouter()
    const reload = () => { // recovering from error
        startTransition(() => {
            router.refresh()
            reset()
        })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-800">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">Error In review Id</h1>
                <p className="text-lg">{error.message}</p>
                <button onClick={reload}>Click me to reset</button>
            </div>
        </div>
    );
}
// this error.tsx doesnt catch error in layout > suspense tree then how ? error.tsx in the parent route however cathes it