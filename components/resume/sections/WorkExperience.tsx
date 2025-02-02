"use client";

import {ResumeData} from "@/types/resume";

export function WorkExperience({experiences}: { experiences: ResumeData["workExperience"]; }) {
    return (
        <section className="mb-4">
            <h2 className="font-semibold text-base mb-0">Work Experience</h2>
            <hr className="border-gray-300 my-2"/>

            {experiences.map((exp, index) => (
                <div key={index} className="mb-3 text-sm">
                    <div className="table w-full table-fixed">
                        <div className="table-row mb-5">
                            {/* Left Column: Role */}
                            <div
                                className="
                              table-cell
                              w-1/4
                              font-medium
                              whitespace-nowrap
                              overflow-ellipsis
                              align-top
                            "
                            >
                                {exp.role}
                            </div>

                            {/* Center Column: Employer + Location */}
                            <div className="
                                  table-cell
                                  w-1/2
                                  text-center
                                  whitespace-nowrap
                                  overflow-ellipsis
                                  align-top
                                  font-bold
                               ">
                                {exp.employer}
                                {exp.location ? ` – ${exp.location}` : ""}
                            </div>

                            {/* Right Column: Date Range */}
                            <div className="
                                  table-cell
                                  w-1/4
                                  text-right
                                  text-gray-600
                                  whitespace-nowrap
                                  overflow-ellipsis
                                  align-top
                                ">
                                {exp.dateRange}
                            </div>
                        </div>
                    </div>

                    <ul className="list-disc list-inside mt-1 ml-4">
                        {exp.points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
