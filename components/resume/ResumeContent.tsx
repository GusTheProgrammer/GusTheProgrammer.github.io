'use client';

import { RefObject } from "react";
import { ResumeData } from "@/types/resume";
import {Header} from "@/components/resume/sections/Header";
import {Education} from "@/components/resume/sections/Education";
import {WorkExperience} from "@/components/resume/sections/WorkExperience";
import {Projects} from "@/components/resume/sections/Projects";
import {TechnicalSkills} from "@/components/resume/sections/TechnicalSkills";
import {AdditionalInfo} from "@/components/resume/sections/AdditionalInfo";
import {useThemeSettingsStore} from "@/stores/useThemeSettingsStore";

interface ResumeContent {
    data: ResumeData;
    resumeContainerRef?: RefObject<HTMLDivElement>;
}

export default function ResumeContent({ data, resumeContainerRef }: ResumeContent) {
    const { theme, font } = useThemeSettingsStore();
    return (
        <div
            ref={resumeContainerRef}
            className={`previewContainer relative rounded overflow-auto custom-scrollbar theme bg-white border border-gray-200 prose max-w-none text-[#1c2024] p-3 ${theme?.toLowerCase()} w-a4 h-a4`}
            style={{ fontFamily: font }}
        >
            <Header data={data.header} />
            <WorkExperience experiences={data.workExperience} />
            <Education data={data.education} />
            <Projects projects={data.projects} />
            <TechnicalSkills skills={data.technicalSkills} />
            <AdditionalInfo data={data.additional} />
        </div>
    );
}