"use client"

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathNames = usePathname()
    const productId = pathNames.split("/")[2]
    const reviewId = pathNames.split("/")[4]
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
            <div className="text-center space-y-4">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="text-xl">Revirew Not Found</p>
                <p className="text-xl">Error occured at product  id{productId} and review id {reviewId}</p>

            </div>
        </div>
    );
}
