import Link from "next/link";


export default function Notification() { // subnavigated route inside a sinlgle page
    return (
        <section className="p-4 bg-yellow-50 text-zinc-800 rounded">
            <h2 className="text-xl font-semibold mb-2">Notifications</h2>
            <ul className="list-disc list-inside">
                <li>System update available</li>
                <li>New signup alert</li>
                <li>Payment received</li>
            </ul>
            <Link href="/dashboard">New</Link>
        </section>
    );
}
