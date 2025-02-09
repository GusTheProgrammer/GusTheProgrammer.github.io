"use client";


import GlowCard from "@/components/portfolio/GlowCard";

interface Project {
    name: string;
    url: string;
    points: string[];
}

export default function Projects({ projects }: { projects: Project[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {projects.map((project, index) => (
                <GlowCard className="w-96 h-96" key={index}
                          glowSize="150px"
                          borderGlowSize="100px"
                          borderColor="#d97706"
                          blobColor="#d97706"

                          >
                    <h3 className="text-xl font-bold mb-4">{project.name}</h3>
                    <ul className="text-sm text-gray-300 mb-4">
                    </ul>
                    <a
                        href="#"
                        className="inline-block px-4 py-2 bg-amber-500 text-white rounded-lg font-medium transition hover:bg-amber-600"
                    >
                        Learn More
                    </a>
                </GlowCard>
            ))}
        </div>
    );
}
