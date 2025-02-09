import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";
import plugin from "tailwindcss/plugin";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            width: {
                a4: "210mm",
            },
            height: {
                a4: "297mm",
            },
        },
    },
    darkMode: "class",
    plugins: [
        heroui(),
        plugin(function ({ addUtilities }) {
            const newUtilities = {
                ".glow-card": {
                    position: "relative",
                    "--glow-size": "150px",
                    "--border-glow-size": "150px",
                },
                ".border-glow": {
                    position: "absolute",
                    inset: "0",
                    border: "var(--border-width, 3px) solid transparent",
                    "border-image": "radial-gradient(var(--border-glow-size) at var(--glow-x, -9999px) var(--glow-y, -9999px), var(--border-color, black), transparent) 1",
                    transition: "opacity 0.5s ease",
                    opacity: "var(--glow-intensity, 0)",
                },
                ".blob-effect": {
                    position: "absolute",
                    inset: "0",
                    "mask-image": "radial-gradient(var(--glow-size) at var(--glow-x, -9999px) var(--glow-y, -9999px), var(--blob-color, black), transparent)",
                    "-webkit-mask-image": "radial-gradient(var(--glow-size) at var(--glow-x, -9999px) var(--glow-y, -9999px), var(--blob-color, black), transparent)",
                    "background-color": "var(--blob-color, black)",
                    "backdrop-filter": "blur(10px)",
                    transition: "opacity 0.5s ease",
                },
                ".dark .border-glow": {
                    "border-image": "radial-gradient(var(--border-glow-size) at var(--glow-x, -9999px) var(--glow-y, -9999px), var(--border-color, white), transparent) 1",
                },
                ".dark .blob-effect": {
                    "mask-image": "radial-gradient(var(--glow-size) at var(--glow-x, -9999px) var(--glow-y, -9999px), var(--blob-color, white), transparent)",
                    "-webkit-mask-image": "radial-gradient(var(--glow-size) at var(--glow-x, -9999px) var(--glow-y, -9999px), var(--blob-color, white), transparent)",
                    "background-color": "var(--blob-color, white)",
                },
            };
            addUtilities(newUtilities, { respectPrefix: false, respectImportant: false });
        }),
    ],
} satisfies Config;
