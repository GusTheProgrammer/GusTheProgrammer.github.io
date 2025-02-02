'use client';

import {SidebarSection} from "@/components/sidebar/SidebarSection";
import {SliderComponent} from "@/components/sidebar/SliderComponent";
import {Layout} from "lucide-react";
import {useThemeSettingsStore} from "@/stores/useThemeSettingsStore";


export function LayoutSection() {
    const {
        lineHeightScale,
        setLineHeightScale,
        xPaddingScale,
        setXPaddingScale,
        yPaddingScale,
        setYPaddingScale
    } = useThemeSettingsStore();

    return (
        <SidebarSection title="Layout" icon={<Layout className="h-4 w-4"/>}>
            <div className='pt-2'>
                <SliderComponent
                    label="Line Height"
                    value={lineHeightScale}
                    min={1.0}
                    max={3.0}
                    step={0.1}
                    onChange={setLineHeightScale}
                    currentValue={lineHeightScale.toString()}
                />
                <SliderComponent
                    label="X Padding"
                    value={xPaddingScale}
                    min={0} max={48} step={2}
                    onChange={setXPaddingScale}
                    currentValue={`${xPaddingScale}px`}
                />
                <SliderComponent
                    label="Y Padding"
                    value={yPaddingScale}
                    min={0} max={48} step={2}
                    onChange={setYPaddingScale}
                    currentValue={`${yPaddingScale}px`}
                />
            </div>
        </SidebarSection>
    );
}