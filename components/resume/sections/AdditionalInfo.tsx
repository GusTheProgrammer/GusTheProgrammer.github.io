"use client";

import { ResumeData } from "@/types/resume";

export function AdditionalInfo({ data }: { data: ResumeData["additional"] }) {
    return (
        <section className="mb-4">
            <hr/>
            {data.references && (
                <p className="text-sm">
                    <strong>References:</strong> {data.references}
                </p>
            )}
        </section>
    );
}
