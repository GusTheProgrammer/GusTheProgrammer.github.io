'use client';

import { Link } from "@heroui/react";
import { Github, Linkedin, Mail } from "lucide-react"
import NextLink from "next/link"

export default function Footer() {
    return (
        <footer
            className="rounded-lg shadow-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] m-4 w-full mx-auto max-w-screen-sm p-4 md:flex md:items-center md:justify-between ">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © {new Date().getFullYear()} Gus Shaal. Don&#39;t sue me.
                </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link isExternal as={NextLink} href='' aria-label="Email">
                        <Mail className="text-default-500 me-4 md:me-6" size={20}/>
                    </Link>
                </li>
                <li>
                    <Link isExternal as={NextLink} href='' aria-label="Github">
                        <Github className="text-default-500 me-4 md:me-6" size={20}/>
                    </Link>
                </li>
                <li>
                    <Link isExternal as={NextLink} href='' aria-label="LinkedIn">
                        <Linkedin className="text-default-500 me-4 md:me-6" size={20}/>
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

