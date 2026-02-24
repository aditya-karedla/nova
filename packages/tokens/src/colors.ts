/**
 * Nova Design System - Color Palette
 * 
 * Professional blue-based color system for enterprise applications.
 * All colors are optimized for WCAG 2.1 AA accessibility standards.
 */

export const colors = {
  // Primary Brand Color - Professional Blue
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",  // Base
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554",
  },

  // Neutrals - Gray with subtle blue tint for cohesion
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",  // Base
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712",
  },

  // Semantic Colors

  // Success - Emerald
  success: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",  // Base
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22",
  },

  // Warning - Amber
  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",  // Base
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03",
  },

  // Danger/Error - Red
  danger: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",  // Base
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a",
  },

  // Info - Sky Blue
  info: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",  // Base
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49",
  },

  // Pure values for borders, backgrounds, etc.
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",
} as const;

// Semantic token mappings (light theme)
export const semanticColors = {
  light: {
    background: {
      primary: colors.white,
      secondary: colors.gray[50],
      tertiary: colors.gray[100],
      hover: colors.gray[100],
      active: colors.gray[200],
    },
    foreground: {
      primary: colors.gray[900],
      secondary: colors.gray[600],
      tertiary: colors.gray[500],
      muted: colors.gray[400],
      inverted: colors.white,
    },
    border: {
      default: colors.gray[200],
      strong: colors.gray[300],
      subtle: colors.gray[100],
    },
    brand: {
      primary: colors.primary[600],
      secondary: colors.primary[500],
      hover: colors.primary[700],
      active: colors.primary[800],
      subtle: colors.primary[50],
    },
    status: {
      success: colors.success[600],
      warning: colors.warning[600],
      danger: colors.danger[600],
      info: colors.info[600],
    },
  },
  dark: {
    background: {
      primary: colors.gray[950],
      secondary: colors.gray[900],
      tertiary: colors.gray[800],
      hover: colors.gray[800],
      active: colors.gray[700],
    },
    foreground: {
      primary: colors.gray[50],
      secondary: colors.gray[400],
      tertiary: colors.gray[500],
      muted: colors.gray[600],
      inverted: colors.gray[950],
    },
    border: {
      default: colors.gray[800],
      strong: colors.gray[700],
      subtle: colors.gray[900],
    },
    brand: {
      primary: colors.primary[500],
      secondary: colors.primary[600],
      hover: colors.primary[400],
      active: colors.primary[300],
      subtle: colors.primary[950],
    },
    status: {
      success: colors.success[500],
      warning: colors.warning[500],
      danger: colors.danger[500],
      info: colors.info[500],
    },
  },
} as const;

export type ColorScale = keyof typeof colors;
export type ColorShade = keyof typeof colors.primary;
