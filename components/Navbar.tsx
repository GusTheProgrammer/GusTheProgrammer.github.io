'use client';

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
} from "@heroui/react";
import {BusFront} from "lucide-react";
import {ThemeSwitcher} from "@/components/ThemeSwitcher";

export function NavbarWrapper() {

    return (
        <Navbar>
            <NavbarBrand>
                <BusFront/>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link aria-current="page" href="/">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/cv">
                        Paper CV
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <ThemeSwitcher/>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
