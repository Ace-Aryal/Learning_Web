"use client"

// type ErrorProps = {
//     message?: string;
// };
// by doing this in every component or page others will still run without breaking , our navbar , footer a, sidebar and other components will stil work
export default function Error({ error }: { error: Error }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-800">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">Error In review Id</h1>
                <p className="text-lg">{error.message}</p>
            </div>
        </div>
    );
}
