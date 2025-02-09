'use client';

import { useResumeStore } from "@/stores/useResumeStore";
import WorkExperienceTimeline from "@/components/portfolio/WorkExperienceTimeline";
import Projects from "@/components/portfolio/Projects";
import Loading from "@/components/Loading";

export default function Home() {
    const resumeData = useResumeStore((state) => state.data);
    if (!resumeData) return <Loading/>;

    return (
        <div className="flex items-center justify-center min-h-screen w-full relative">
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
                <WorkExperienceTimeline workExperience={resumeData.workExperience}/>
                <Projects projects={resumeData.projects}/>
                <Projects projects={resumeData.projects}/>
                <Projects projects={resumeData.projects}/>
            </div>
        </div>
    );
}
