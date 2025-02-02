"use client";

import { ResumeData } from "@/types/resume";

export function TechnicalSkills({ skills }: { skills: ResumeData["technicalSkills"] }) {
    return (
        <section className="mb-4">
            <h2 className="font-semibold text-base mb-0">Technical Skills</h2>
            <hr className="border-gray-300 my-2" />

            <div className="text-sm space-y-2">
                {skills.map((skill, idx) => (
                    <div key={idx}>
                        <span className="font-medium">{skill.category}:</span>{" "}
                        {skill.items.join(", ")}
                    </div>
                ))}
            </div>
        </section>
    );
}
