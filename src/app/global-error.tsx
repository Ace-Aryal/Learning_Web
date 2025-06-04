'use client';
import "./globals.css"
export default function GlobalError({
    error,

}: {
    error: Error & { digest?: string };

}) {
    return (
        <html>
            <body>
                <h2>Something went wrong!</h2>
                <p>{error.message}</p>
                <button onClick={() => window.location.reload()}>Try again</button>
            </body>
        </html>
    );
}
