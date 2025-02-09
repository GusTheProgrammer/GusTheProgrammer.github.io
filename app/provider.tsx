"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ResumeData } from "@/types/resume";
import { useResumeStore } from "@/stores/useResumeStore";
import { useEffect } from "react";
import { GlowProvider } from "@/components/portfolio/GlowProvider";

export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
    resumeData: ResumeData;
}

export function Providers({ children, themeProps, resumeData }: ProvidersProps) {
    const hydrate = useResumeStore((state) => state.hydrate);
    const router = useRouter();

    useEffect(() => {
        hydrate(resumeData);
    }, [ resumeData, hydrate ]);

    return (
        <HeroUIProvider navigate={router.push}>
            <NextThemesProvider {...themeProps}>
                <GlowProvider>
                    {children}
                </GlowProvider>
            </NextThemesProvider>
        </HeroUIProvider>
    );
}
