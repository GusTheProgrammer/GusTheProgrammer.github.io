import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Gus's CV",
    description: "Create a professional resume by writing in Markdown, using our simple editor, and choosing from various templates to export your resume easily.",
};

export default function EditorLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}