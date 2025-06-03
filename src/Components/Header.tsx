"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

type Nav = {
    label: string,
    href: string,
}

export default function Header() {
    const navLinks: Nav[] = [
        { label: "Login", href: "/login" },
        { label: "Forgot password", href: "/forgot-password" },
        { label: "Signup", href: "/register" },

    ]
    const pathname = usePathname()

    return (
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <nav className="max-w-6xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">MyApp</Link>
                <div className="space-x-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (
                            pathname.startsWith(link.href) && link.href !== "/"
                        )

                        return (<Link className={`${isActive ? "bg-gray-500 p-2 rounded-lg" : ""}`} key={link.href} href={link.href}>{link.label}</Link>)
                    })}
                    <Link href="/docs" replace={true}  >Docs</Link> {/* replaces current url state  */}
                </div>
            </nav>
        </header>
    );
}
