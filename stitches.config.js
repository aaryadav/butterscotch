import { createStitches } from "@stitches/react";
import { violet, slate } from '@radix-ui/colors';

export const { styled, createTheme, keyframes } = createStitches({
    theme: {
        colors: {
            ...violet,
            ...slate,
        },
        fonts: {
            head: 'Barlow',
            sans: 'system-ui',
            mono: 'JetBrains Mono'
        },
        fontSizes: {
            p: '16px',
            h: '40px',
        },
        space: {},
        sizes: {},
        radii: {},
        fontWeights: {},
        lineHeights: {},
        letterSpacings: {},
        borderWidths: {},
        borderStyles: {},
        shadows: {},
        zIndices: {},
        transitions: {},
    }
});