export default function CustomerPage() {
    const customers = [
        { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com", status: "Active" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Customer List</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow rounded">
                    <thead className="bg-gray-200 text-gray-600 text-left">
                        <tr>
                            <th className="p-4">Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id} className="border-b hover:bg-gray-50">
                                <td className="p-4">{customer.name}</td>
                                <td className="p-4">{customer.email}</td>
                                <td className="p-4">
                                    <span
                                        className={`px-2 py-1 rounded text-sm font-medium ${customer.status === "Active"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                            }`}
                                    >
                                        {customer.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
