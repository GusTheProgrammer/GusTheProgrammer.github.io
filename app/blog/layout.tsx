import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Gus's Blog",
    description: "A blog about software development and other things I find interesting.",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}