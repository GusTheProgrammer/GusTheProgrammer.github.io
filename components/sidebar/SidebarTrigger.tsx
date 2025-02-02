import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

interface SidebarTriggerProps {
    onTrigger: (isOpen: boolean) => void;
}

export default function SidebarTrigger({ onTrigger }: SidebarTriggerProps) {
    return (
        <motion.div
            className="fixed top-1/2 right-0 -translate-y-1/2
                 cursor-pointer flex items-center justify-center
                 text-black dark:text-white p-2"
            animate={{
                scale: [1, 1.3, 1],
                x: [0, -8, 0]
            }}
            transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: [0.4, 0, 0.2, 1],
                times: [0, 0.5, 1],
                repeatDelay: 0.5
            }}
            onMouseEnter={() => onTrigger(true)}
            title="Hover to open the panel"
        >
            <ChevronLeft size={48} className="stroke-current" />
        </motion.div>
    );
}