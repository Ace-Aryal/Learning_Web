import Link from "next/link";


export default function Notification() {
    return (
        <section className="p-4 bg-yellow-50 rounded text-zinc-800">
            <h2 className="text-xl font-semibold mb-2">Notifications</h2>
            <ul className="list-disc list-inside">
                <li>New signup alert</li>
                <li>Payment received</li>
                <li>System update available</li>
            </ul>
            <Link href="/dashboard/archived">Archived</Link>
            {/* sub navigation within same page : unmatched routes so next js ignores shifting pages for other routes
            But during reload it asks for all of the slots for their matching routes
            */}
        </section>
    );
}
