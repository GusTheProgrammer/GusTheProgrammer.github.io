"use client";

import {ResumeData} from "@/types/resume";

export function Education({data}: { data: ResumeData["education"] }) {
    return (
        <section className="mb-4">
            <h2 className="font-semibold text-base mb-0">Education</h2>
            <hr className="border-gray-300 my-2"/>

            {/* If you have multiple education entries, map them. This example shows one. */}
            <div className="mb-3 text-sm">
                <div className="table w-full table-fixed">
                    <div className="table-row">
                        {/* Left Column: Location */}
                        <div
                            className="
                table-cell
                w-1/4
                font-medium
                whitespace-nowrap
                overflow-hidden
                overflow-ellipsis
                align-top
              "
                        >
                            {data.location}
                        </div>

                        {/* Center Column: Institution */}
                        <div
                            className="
                table-cell
                w-1/2
                text-center
                whitespace-nowrap
                overflow-hidden
                overflow-ellipsis
                align-top
                font-bold
              "
                        >
                            {data.institution}
                        </div>

                        {/* Right Column: Date Range */}
                        <div
                            className="
                table-cell
                w-1/4
                text-right
                text-gray-600
                whitespace-nowrap
                overflow-hidden
                overflow-ellipsis
                align-top
              "
                        >
                            {data.dateRange}
                        </div>
                    </div>
                </div>

                <ul className="list-disc list-inside mt-1 ml-4">
                    {data.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
