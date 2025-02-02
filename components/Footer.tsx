'use client';

import {Link} from "@heroui/react";
import {Github, Linkedin, Mail} from "lucide-react"
import NextLink from "next/link"

export default function Footer() {

    return (
        <footer className="w-full flex items-center justify-center py-3">
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1 text-current">
                    <span>© {new Date().getFullYear()} Gussyyy</span>
                    <Link isExternal as={NextLink} href='' aria-label="LinkedIn">
                        <Linkedin className="text-default-500" size={20}/>
                    </Link>
                    <Link isExternal as={NextLink} href='' aria-label="Github">
                        <Github className="text-default-500" size={20}/>
                    </Link>
                    <Link isExternal as={NextLink} href='' aria-label="Email">
                        <Mail className="text-default-500" size={20}/>
                    </Link>
                </div>
                <div className="flex gap-3 text-current">

                </div>
            </div>
        </footer>
    )
}

