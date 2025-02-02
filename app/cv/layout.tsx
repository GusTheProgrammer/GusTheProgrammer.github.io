import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "CV",
    description: "Create a professional resume by writing in Markdown, using our simple editor, and choosing from various templates to export your resume easily.",
    keywords: [
        "Resume Builder",
        "Markdown Resume",
        "Export Resume as PDF",
        "Professional Resume Templates",
        "Next.js Resume App",
    ].join(", "),
    openGraph: {
        title: "Markdown Resume - Create Professional Resumes with Markdown",
        description: "Write your resume in Markdown, edit it easily, choose a professional template, and export it as a PDF. Try our Resume Builder today!",
        type: "website",
        locale: "en_US",
    },
};

export default function EditorLayout({children}: { children: React.ReactNode }) {
    return <>{children}</>;
}