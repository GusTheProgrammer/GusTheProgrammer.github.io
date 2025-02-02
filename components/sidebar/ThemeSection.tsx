import { useEffect, useState } from "react";
import { SidebarSection } from "@/components/sidebar/SidebarSection";
import { Palette } from "lucide-react";
import { ThemeList } from "@/lib/constants";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import {useThemeSettingsStore} from "@/stores/useThemeSettingsStore";



export function ThemeSection() {
    const { theme, applyTheme } = useThemeSettingsStore();
    const themeOptions = Object.entries(ThemeList).map(([key, value]) => ({
        key: key,
        label: value,
    }));

    // Get initial key safely
    const getInitialKey = () => {
        const entry = Object.entries(ThemeList).find(
            ([_, value]) => value === theme
        );
        return entry?.[0] || 'tehran';
    };

    const [selectedKey, setSelectedKey] = useState<string>(getInitialKey());

    useEffect(() => {
        const newKey = Object.entries(ThemeList).find(
            ([_, value]) => value === theme
        )?.[0];
        if (newKey) setSelectedKey(newKey);
    }, [theme]);

    const handleSelectionChange = (key: string | number | null) => {
        // Handle null case (when input is cleared)
        if (key === null) {
            const defaultKey = 'tehran';
            setSelectedKey(defaultKey);
            applyTheme(ThemeList[defaultKey as keyof typeof ThemeList]);
            return;
        }

        const themeKey = key as keyof typeof ThemeList;

        // Additional safety check
        if (ThemeList[themeKey]) {
            setSelectedKey(themeKey);
            applyTheme(ThemeList[themeKey]);
        } else {
            // Fallback to default if invalid key
            const defaultKey = 'tehran';
            setSelectedKey(defaultKey);
            applyTheme(ThemeList[defaultKey as keyof typeof ThemeList]);
        }
    };

    return (
        <SidebarSection title="Theme" icon={<Palette className="h-4 w-4" />}>
            <div className='relative w-full pb-4'>
                <Autocomplete
                    className="w-full"
                    defaultItems={themeOptions}
                    selectedKey={selectedKey}
                    onSelectionChange={handleSelectionChange}
                    label="Select Theme"
                    placeholder="Search theme"
                    variant="bordered"
                    allowsCustomValue={false}
                    startContent={<Palette className="w-5 h-5" />}
                >
                    {(item) => (
                        <AutocompleteItem key={item.key}>
                            {item.label}
                        </AutocompleteItem>
                    )}
                </Autocomplete>
            </div>
        </SidebarSection>
    );
}