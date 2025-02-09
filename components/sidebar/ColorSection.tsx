'use client';

import { SidebarSection } from "@/components/sidebar/SidebarSection";
import ColorPicker from "@/components/sidebar/ColorPicker";
import { Palette } from "lucide-react";
import { useThemeSettingsStore } from "@/stores/useThemeSettingsStore";

export default function ColorSection() {
    const {
        headerColor,
        setHeaderColor,
        textColor,
        setTextColor,
        linkColor,
        setLinkColor,
        bulletColor,
        setBulletColor,
        hrColor,
        setHrColor
    } = useThemeSettingsStore();

    return (
        <SidebarSection title="Colors" icon={<Palette className="h-4 w-4"/>}>
            <ColorPicker label="Heading" value={headerColor} onChange={setHeaderColor}/>
            <ColorPicker label="Text" value={textColor} onChange={setTextColor}/>
            <ColorPicker label="Link" value={linkColor} onChange={setLinkColor}/>
            <ColorPicker label="Bullet Points" value={bulletColor} onChange={setBulletColor}/>
            <ColorPicker label="HR Line" value={hrColor} onChange={setHrColor}/>
        </SidebarSection>
    );
}