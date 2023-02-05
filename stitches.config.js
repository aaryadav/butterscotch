import { createStitches } from "@stitches/react";
import { violet, slate } from '@radix-ui/colors';
import { globalCss } from '@stitches/react';

export const { styled, createTheme, keyframes } = createStitches({
    theme: {
        colors: {
            ...violet,
            ...slate,
        },
        fonts: {
            head: 'Barlow',
            sans: 'Inter',
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

const globalStyles = globalCss({
    '@font-face': [
        {
            fontFamily: 'Inter',
            src: 'url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2)',
        },
        {
            fontFamily: 'Jet Brains Mono',
            src: 'url(https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxTOlOV.woff2)',
        },
    ],
});

globalStyles();