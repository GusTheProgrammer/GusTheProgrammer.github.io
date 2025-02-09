"use client";

import React, { useEffect, useRef } from "react";

export function GlowProvider({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        const handlePointerMove = (e: PointerEvent) => {
            container.style.setProperty("--global-glow-x", `${e.clientX}px`);
            container.style.setProperty("--global-glow-y", `${e.clientY}px`);
        };
        const handlePointerLeave = () => {
            container.style.removeProperty("--global-glow-x");
            container.style.removeProperty("--global-glow-y");
        };
        container.addEventListener("pointermove", handlePointerMove, { passive: true });
        container.addEventListener("pointerleave", handlePointerLeave, { passive: true });
        return () => {
            container.removeEventListener("pointermove", handlePointerMove);
            container.removeEventListener("pointerleave", handlePointerLeave);
        };
    }, []);

    return (
        <div ref={containerRef} className="glow-provider relative w-full h-full">
            {children}
        </div>
    );
}
