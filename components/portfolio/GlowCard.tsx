"use client";

import { Card, CardBody } from "@heroui/react";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
    glowSize?: string;
    borderGlowSize?: string;
    borderColor?: string;
    blobColor?: string;
    borderWidth?: string;
}

export default function GlowCard({
                                     children,
                                     className,
                                     glowSize = "150px",
                                     borderGlowSize = "150px",
                                     borderColor,
                                     blobColor,
                                     borderWidth = "3px",
                                 }: GlowCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [ blobVisible, setBlobVisible ] = useState(false);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        card.style.setProperty("--glow-size", glowSize);
        card.style.setProperty("--border-glow-size", borderGlowSize);
        card.style.setProperty("--border-width", borderWidth);
        if (borderColor) {
            card.style.setProperty("--border-color", borderColor);
        } else {
            card.style.removeProperty("--border-color");
        }
        if (blobColor) {
            card.style.setProperty("--blob-color", blobColor);
        } else {
            card.style.removeProperty("--blob-color");
        }
    }, [ glowSize, borderGlowSize, borderColor, blobColor, borderWidth ]);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        const container = card.closest(".glow-provider") as HTMLElement;
        if (!container) return;
        const updateGlow = () => {
            const rect = card.getBoundingClientRect();
            const computed = getComputedStyle(container);
            const globalX = parseFloat(
                computed.getPropertyValue("--global-glow-x") || "-9999"
            );
            const globalY = parseFloat(
                computed.getPropertyValue("--global-glow-y") || "-9999"
            );
            const relativeX = globalX - rect.left;
            const relativeY = globalY - rect.top;
            const distLeft = relativeX;
            const distRight = rect.width - relativeX;
            const distTop = relativeY;
            const distBottom = rect.height - relativeY;
            const minDistance = Math.min(distLeft, distRight, distTop, distBottom);
            const margin = 50;
            let intensity = 0;
            if (
                globalX >= rect.left &&
                globalX <= rect.right &&
                globalY >= rect.top &&
                globalY <= rect.bottom
            ) {
                intensity = 1;
            } else if (minDistance < margin) {
                intensity = 1 - minDistance / margin;
            }
            card.style.setProperty("--glow-x", `${relativeX}px`);
            card.style.setProperty("--glow-y", `${relativeY}px`);
            card.style.setProperty("--glow-intensity", intensity.toString());
        };

        container.addEventListener("pointermove", updateGlow, { passive: true });
        container.addEventListener("pointerleave", () => {
            card.style.setProperty("--glow-intensity", "0");
        });
        updateGlow();
        return () => {
            container.removeEventListener("pointermove", updateGlow);
            container.removeEventListener("pointerleave", () => {
            });
        };
    }, []);

    const handlePointerEnter = () => setBlobVisible(true);
    const handlePointerLeave = () => setBlobVisible(false);

    return (
        <Card
            ref={cardRef}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            className={cn(
                "glow-card relative overflow-hidden p-0.5 shadow-lg transition-shadow duration-300",
                className
            )}
            radius="sm"
        >
            <div className="pointer-events-none absolute inset-0 border-glow"/>
            <div
                className="pointer-events-none absolute inset-0 blob-effect"
                style={{ opacity: blobVisible ? 0.2 : 0 }}
            />
            <CardBody className="relative z-10 flex flex-col items-center justify-center text-center">
                {children}
            </CardBody>
        </Card>
    );
}
