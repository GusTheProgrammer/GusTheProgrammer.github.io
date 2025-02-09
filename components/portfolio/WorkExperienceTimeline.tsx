import { Chip } from "@heroui/chip";

interface WorkExperience {
    role: string;
    employer: string;
    location: string;
    dateRange: string;
}

interface WorkExperienceTimelineProps {
    workExperience: WorkExperience[];
}

const WorkExperienceTimeline = ({ workExperience }: WorkExperienceTimelineProps) => {
    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {workExperience.map((job, index) => {
                const isCurrent = job.dateRange.toLowerCase().includes("present");

                return (
                    <li
                        key={index}
                        className={`mb-10 ms-6 ${isCurrent ? "opacity-100" : "opacity-50"}`}
                    >
                        {/* Dot for the Timeline */}
                        <span
                            className="absolute flex items-center justify-center w-2.5 h-2.5 bg-gray-500 rounded-full -start-1.5"></span>

                        {/* Job Role & Company */}
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                            {job.role}
                            {isCurrent && (
                                <Chip className="ml-2">
                                    PRESENT
                                </Chip>
                            )}
                        </h3>

                        {/* Employer Name */}
                        <p className="text-sm font-medium">
                            {job.employer}
                        </p>
                    </li>
                );
            })}
        </ol>
    );
};

export default WorkExperienceTimeline;
