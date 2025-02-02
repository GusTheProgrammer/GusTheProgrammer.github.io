"use client";

import { ResumeData } from "@/types/resume";

export function Projects({ projects }: { projects: ResumeData["projects"] }) {
    return (
        <section className="mb-4">
            <h2 className="font-semibold text-base mb-0">Projects</h2>
            <hr className="border-gray-300 my-2" />

            {projects.map((project, idx) => (
                <div key={idx} className="mb-3 text-sm">
                    <div className="font-medium">
                        {project.name}
                        {project.url && (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-blue-600 underline"
                            >
                                {project.url}
                            </a>
                        )}
                    </div>

                    <ul className="list-disc list-inside mt-1 ml-4">
                        {project.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
