'use client';

import ResumeContent from "@/components/resume/ResumeContent";
import {ResumeData} from "@/types/resume";
import Sidebar from "@/components/sidebar/Sidebar"
import {useRef, useState} from "react";
import {useReactToPrint} from "react-to-print";
import SidebarTrigger from "@/components/sidebar/SidebarTrigger";
import {useResumeStyles} from "@/hooks/useResumeStyles";

interface ResumeProps {
    resumeData: ResumeData;
}

function Resume({resumeData}: ResumeProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const resumeContainerRef = useRef<HTMLDivElement>(null!);
    const resumeRefContent = () => resumeContainerRef.current;
    const handlePrint = useReactToPrint({
        documentTitle: "GusCV",
    });

    // Apply resume styles
    useResumeStyles(resumeContainerRef);

    return (
        <div className="flex items-center justify-center min-h-screen w-full relative">
            <div className={`transition-all duration-300 
                ${sidebarOpen ? "mr-[500]" : ""}`}>
                <ResumeContent
                    data={resumeData}
                    resumeContainerRef={resumeContainerRef}
                />
            </div>
            <Sidebar
                handlePrint={() => handlePrint(resumeRefContent)}
                onIsOpenChange={(isOpen) => setSidebarOpen(isOpen)}
            />
            {!sidebarOpen && (
                <SidebarTrigger onTrigger={(isOpen) => setSidebarOpen(isOpen)}/>
            )}
        </div>
    );
}

export default Resume;