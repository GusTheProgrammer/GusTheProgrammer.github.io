import "@/styles/globals.css";
import {Metadata, Viewport} from "next";
import {Fira_Code as FontMono, Inter as FontSans} from "next/font/google";
import {Providers} from "@/app/provider";
import clsx from "clsx";
import {NavbarWrapper} from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Sussy Gussy",
    description: "idk portfolio or sumshit",
};

export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
};

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {

    return (
        <html suppressHydrationWarning lang="en">
            <body
                className={clsx(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                )}
            >
                <Providers themeProps={{attribute: "class", defaultTheme: "dark"}}>
                    <NavbarWrapper />
                    {children}
                    <Footer  />
                </Providers>
            </body>
        </html>
    );
}
