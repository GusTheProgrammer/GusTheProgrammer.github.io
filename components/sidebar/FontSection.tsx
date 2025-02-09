"use client";

import React, { useState, useEffect } from "react";
import { SidebarSection } from "@/components/sidebar/SidebarSection";
import { Type } from "lucide-react";
import { SliderComponent } from "@/components/sidebar/SliderComponent";
import { fonts } from "@/lib/constants";
import { loadFont } from "@/lib/fontUtils";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useThemeSettingsStore } from "@/stores/useThemeSettingsStore";

export function FontSection() {
    const {
        font,
        setFont,
        fontScale,
        setFontScale,
        headingScale,
        setHeadingScale,
    } = useThemeSettingsStore();

    const baseFontSize = 16;
    const fontOptions = Object.keys(fonts).map((fontKey) => ({
        key: fontKey,
        label: fontKey,
    }));
    const [ selectedKey, setSelectedKey ] = useState<string>(font);

    useEffect(() => {
        setSelectedKey(font);
    }, [ font ]);

    const handleSelectionChange = (key: string | number | null) => {
        if (key === null) {
            const defaultFont = "Open Sans";
            setFont(defaultFont);
            loadFont(fonts[ defaultFont ]);
            return;
        }
        setFont(key as string);
        loadFont(fonts[ key as string ]);
    };


    return (
        <SidebarSection title="Typography" icon={<Type className="h-4 w-4" />}>
            <div className="relative w-full mb-4">
                <Autocomplete
                    className="w-full"
                    defaultItems={fontOptions}
                    selectedKey={selectedKey}
                    onSelectionChange={handleSelectionChange}
                    label="Select Font"
                    placeholder="Search font"
                    variant="bordered"
                    allowsCustomValue={false}
                    startContent={<Type className="w-5 h-5" />}
                >
                    {(item) => (
                        <AutocompleteItem key={item.key}>
                            {item.label}
                        </AutocompleteItem>
                    )}
                </Autocomplete>
            </div>

            <SliderComponent
                label="Size"
                value={fontScale}
                min={0.5}
                max={3.0}
                step={0.1}
                onChange={setFontScale}
                currentValue={`${(fontScale * baseFontSize).toFixed(1)}px`}
            />

            <SliderComponent
                label="Heading Scale"
                value={headingScale}
                min={0.5}
                max={3.0}
                step={0.1}
                onChange={setHeadingScale}
                currentValue={headingScale.toFixed(1)}
            />
        </SidebarSection>
    );
}
