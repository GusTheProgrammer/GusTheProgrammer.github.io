"use client"

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react"
import { BusFront } from "lucide-react"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"

export function NavbarWrapper() {
    const pathname = usePathname()
    const [ hoveredPath, setHoveredPath ] = useState(pathname)

    const navItems = [
        { label: "About", href: "/" },
        { label: "CV", href: "/cv" },
        { label: "Blog", href: "/blog" },
    ]

    return (
        <div className="fixed top-0 left-0 right-0 flex justify-center pt-4 z-50">
            <Navbar
                className="max-w-screen-sm w-full px-8 rounded-xl dark:bg-black/80 bg-white/40 backdrop-blur-sm backdrop-saturate-150 dark:border-white/10 border-black/10 border overflow-hidden shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <NavbarBrand>
                    <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring", stiffness: 300 }}>
                            <BusFront className="dark:text-white text-black h-[22px] w-[22px]"/>
                        </motion.div>
                    </Link>
                </NavbarBrand>
                <NavbarContent className="sm:flex gap-1 relative" justify="center">
                    <motion.div
                        className="absolute rounded-full bg-amber-400"
                        layoutId="navbar-active"
                        transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                        }}
                    />

                    {navItems.map(({ label, href }) => (
                        <NavbarItem key={label} isActive={pathname === href}>
                            <Link
                                href={href}
                                aria-current={pathname === href ? "page" : undefined}
                                onMouseEnter={() => setHoveredPath(href)}
                                onMouseLeave={() => setHoveredPath(pathname)}
                                className={`relative px-4 py-2 rounded-full transition-all duration-200 ${
                                    pathname === href
                                        ? "text-black dark:text-white"
                                        : "dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-black"
                                }`}
                            >
                                {label}
                                {href === hoveredPath && (
                                    <motion.div
                                        layoutId="navbar-active"
                                        className="absolute inset-0 rounded-full bg-amber-400 -z-10"
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <ThemeSwitcher/>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </div>
    )
}

