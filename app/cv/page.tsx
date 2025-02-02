import { parseResume } from "@/lib/parseResume";
import { Suspense } from "react";
import Resume from "@/components/resume/Resume";

export default function CVPage() {
    const resumeData = parseResume();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Resume resumeData={resumeData} />
        </Suspense>
    );
}

