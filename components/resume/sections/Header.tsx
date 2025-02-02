"use client";

import { ResumeData } from "@/types/resume";

export function Header({ data }: { data: ResumeData["header"] }) {
    return (
        <header className="mb-4">
            {/* Table container for consistent column alignment */}
            <div className="table w-full table-fixed text-sm text-gray-700">
                <div className="table-row">
                    {/* LEFT column (Email, Phone) */}
                    <div
                        className="
              table-cell
              w-1/4
              align-top
              whitespace-nowrap
              overflow-hidden
              overflow-ellipsis
            "
                    >
                        <p>{data.email}</p>
                        <p>{data.phone}</p>
                    </div>

                    {/* CENTER column (Name, Personal Website) */}
                    <div
                        className="
              table-cell
              w-1/2
              align-top
              text-center
              whitespace-nowrap
              overflow-hidden
              overflow-ellipsis
            "
                    >
                        <h1 className="text-xl font-semibold">{data.name}</h1>
                        {data.personalWebsite && (
                            <p className="italic">{data.personalWebsite}</p>
                        )}
                    </div>

                    {/* RIGHT column (GitHub, LinkedIn) */}
                    <div
                        className="
              table-cell
              w-1/4
              align-top
              text-right
              whitespace-nowrap
              overflow-hidden
              overflow-ellipsis
            "
                    >
                        {data.github && (
                            <p>
                                {data.github}
                            </p>
                        )}
                        {data.linkedIn && (
                            <p>
                                {data.linkedIn}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
