'use client';

import { ThemeSection } from "@/components/resume/sidebar/ThemeSection";
import { FontSection } from "@/components/resume/sidebar/FontSection";
import { LayoutSection } from "@/components/resume/sidebar/LayoutSection";
import { SidebarButtons } from "@/components/resume/sidebar/SidebarButtons";
import ColorSection from "@/components/resume/sidebar/ColorSection";
import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, useDisclosure } from "@heroui/react";
import { useEffect, useRef } from "react";

interface SidebarProps {
    handlePrint: () => void;
    onIsOpenChange: (isOpen: boolean) => void;
}

const Sidebar = ({ handlePrint, onIsOpenChange }: SidebarProps) => {
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        onIsOpenChange(isOpen);
    }, [ isOpen, onIsOpenChange ]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const threshold = 20;
            const isNearRight = e.clientX >= window.innerWidth - threshold;
            const elementsAtPoint = document.elementsFromPoint(e.clientX, e.clientY);
            const isInsideDrawer = elementsAtPoint.some((element) => drawerRef.current?.contains(element));

            if (isNearRight && !isOpen) {
                onOpen();
            } else if (!isNearRight && !isInsideDrawer && isOpen) {
                onClose();
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [ isOpen, onOpen, onClose ]);


    return (
        <>
            <Drawer isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    placement="right"
                    backdrop='transparent'
                    motionProps={{
                        variants: {
                            enter: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.3 },
                            },
                            exit: {
                                x: 100,
                                opacity: 0,
                                transition: { duration: 0.3 },
                            },
                        },
                    }}>
                <DrawerContent>
                    {(onClose) => (
                        <div ref={drawerRef}>
                            <DrawerHeader className="flex flex-col gap-1">
                                Settings
                            </DrawerHeader>
                            <DrawerBody>
                                <SidebarButtons handlePrint={handlePrint}/>
                                <ThemeSection />
                                <FontSection />
                                <LayoutSection />
                                <ColorSection />
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="primary" variant="shadow" onPress={onClose}>
                                    Reset
                                </Button>
                            </DrawerFooter>
                        </div>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Sidebar;