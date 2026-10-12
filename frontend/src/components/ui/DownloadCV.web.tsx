import type { CSSProperties } from 'react';

import { colors, fonts, spacing } from '@/theme';

export function DownloadCV() {
    return (
        <a
            href="/Jose-Astorga-CV.pdf"
            download="Jose-Astorga-CV.pdf"
            style={buttonStyle}
        >
            Descargar CV ↓
        </a>
    );
}

const buttonStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    minHeight: 44,
    padding: `${spacing.sm}px ${spacing.lg}px`,
    backgroundColor: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: 4,
    color: colors.primary,
    fontFamily: fonts.bodyMedium,
    fontSize: 14,
    textDecoration: 'none',
};