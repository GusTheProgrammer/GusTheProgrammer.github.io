"use client";

import {create} from "zustand";
import {persist} from "zustand/middleware";
import {themes} from "@/lib/constants";

interface ThemeSettingsState {
    theme: string;

    font: string;
    setFont: (value: string) => void;

    headingScale: number;
    setHeadingScale: (value: number) => void;

    fontScale: number;
    setFontScale: (value: number) => void;

    lineHeightScale: number;
    setLineHeightScale: (value: number) => void;

    xPaddingScale: number;
    setXPaddingScale: (value: number) => void;

    yPaddingScale: number;
    setYPaddingScale: (value: number) => void;

    headerColor: string;
    setHeaderColor: (value: string) => void;

    textColor: string;
    setTextColor: (value: string) => void;

    linkColor: string;
    setLinkColor: (value: string) => void;

    bulletColor: string;
    setBulletColor: (value: string) => void;

    hrColor: string;
    setHrColor: (value: string) => void;

    applyTheme: (themeName: string) => void;
}

export const useThemeSettingsStore = create<ThemeSettingsState>()(
    persist(
        (set, get) => ({
            // Default values
            theme: "tehran",

            font: "Open Sans",
            setFont: (value) => set({font: value}),

            headingScale: 1,
            setHeadingScale: (value) => set({headingScale: value}),

            fontScale: 1,
            setFontScale: (value) => set({fontScale: value}),

            lineHeightScale: 1.5,
            setLineHeightScale: (value) => set({lineHeightScale: value}),

            xPaddingScale: 20,
            setXPaddingScale: (value) => set({xPaddingScale: value}),

            yPaddingScale: 20,
            setYPaddingScale: (value) => set({yPaddingScale: value}),

            headerColor: "#000",
            setHeaderColor: (value) => set({headerColor: value}),

            textColor: "#000",
            setTextColor: (value) => set({textColor: value}),

            linkColor: "#1a73e8",
            setLinkColor: (value) => set({linkColor: value}),

            bulletColor: "#016ef1",
            setBulletColor: (value) => set({bulletColor: value}),

            hrColor: "#000",
            setHrColor: (value) => set({hrColor: value}),

            applyTheme: (themeName) => {
                const normalizedName = themeName.toLowerCase();
                const selectedTheme = themes[normalizedName] || themes["tehran"];

                set({
                    theme: normalizedName,
                    font: selectedTheme.fontName,
                    fontScale: selectedTheme.fontScale,
                    headingScale: selectedTheme.headingScale,
                    lineHeightScale: selectedTheme.lineHeightScale,
                    xPaddingScale: selectedTheme.xPaddingScale,
                    yPaddingScale: selectedTheme.yPaddingScale,
                    headerColor: selectedTheme.headerColor,
                    textColor: selectedTheme.textColor,
                    linkColor: selectedTheme.linkColor,
                    bulletColor: selectedTheme.bulletColor,
                    hrColor: selectedTheme.hrColor,
                });
            },
        }),
        {
            name: "resume-settings",
        }
    )
);
