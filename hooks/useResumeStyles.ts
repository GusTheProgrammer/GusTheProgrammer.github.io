import React, {useEffect} from 'react';
import {useThemeSettingsStore} from '@/stores/useThemeSettingsStore';
import {loadFont} from "@/lib/fontUtils";
import {fonts} from "@/lib/constants";

export const useResumeStyles = (containerRef: React.RefObject<HTMLElement>) => {
    const {
        font,
        fontScale,
        headingScale,
        lineHeightScale,
        xPaddingScale,
        yPaddingScale,
        headerColor,
        textColor,
        linkColor,
        bulletColor,
        hrColor
    } = useThemeSettingsStore();

    useEffect(() => {
        if (font && fonts[font]) loadFont(fonts[font]);
    }, [font]);

    // Update CSS variables in the container
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.style.setProperty('--fontName', font);
        container.style.setProperty('--fontScale', fontScale.toString());
        container.style.setProperty('--headingScale', headingScale.toString());
        container.style.setProperty('--lineHeightScale', lineHeightScale.toString());
        container.style.setProperty('--xPaddingScale', `${xPaddingScale}px`);
        container.style.setProperty('--yPaddingScale', `${yPaddingScale}px`);
        container.style.setProperty('--headerColor', headerColor);
        container.style.setProperty('--textColor', textColor);
        container.style.setProperty('--linkColor', linkColor);
        container.style.setProperty('--bulletColor', bulletColor);
        container.style.setProperty('--hrColor', hrColor);
    }, [containerRef, font, fontScale, headingScale, lineHeightScale,
        xPaddingScale, yPaddingScale, headerColor, textColor, linkColor, bulletColor, hrColor]);
};
