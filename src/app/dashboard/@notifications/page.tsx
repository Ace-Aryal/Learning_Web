export default function Notification() {
    return (
        <section className="p-4 bg-yellow-50 rounded">
            <h2 className="text-xl font-semibold mb-2">Notifications</h2>
            <ul className="list-disc list-inside">
                <li>New signup alert</li>
                <li>Payment received</li>
                <li>System update available</li>
            </ul>
        </section>
    );
}
