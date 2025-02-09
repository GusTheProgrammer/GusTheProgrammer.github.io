'use client';

import { Suspense, useRef, useState } from "react";
import Loading from "@/components/Loading";
import { useReactToPrint } from "react-to-print";
import { useResumeStyles } from "@/hooks/useResumeStyles";
import Resume from "@/components/resume/Resume";
import Sidebar from "@/components/resume/sidebar/Sidebar";
import SidebarTrigger from "@/components/resume/sidebar/SidebarTrigger";
import { useResumeStore } from "@/stores/useResumeStore";

export default function Home() {
    const resumeData = useResumeStore((state) => state.data);
    const [ sidebarOpen, setSidebarOpen ] = useState(false);
    const resumeContainerRef = useRef<HTMLDivElement>(null!);
    const resumeRefContent = () => resumeContainerRef.current;
    const handlePrint = useReactToPrint({
        documentTitle: "GusCV",
    });

    // Apply resume styles
    useResumeStyles(resumeContainerRef);

    if (!resumeData) return <Loading/>;

    return (
        <Suspense fallback={<Loading/>}>
            <div className="flex items-center justify-center min-h-screen w-full relative">
                <div className={`transition-all duration-300 
                ${sidebarOpen ? "mr-[500]" : ""}`}>
                    <Resume
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
        </Suspense>
    );
}
