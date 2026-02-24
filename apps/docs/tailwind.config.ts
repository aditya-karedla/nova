import type { Config } from "tailwindcss";
import { colors, spacing, fontSize, fontWeight, borderRadius, boxShadow } from "@aditya-karedla/tokens";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "../../packages/core/src/**/*.{ts,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        gray: colors.gray,
        success: colors.success,
        warning: colors.warning,
        danger: colors.danger,
        info: colors.info,
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      spacing,
      fontSize: Object.fromEntries(
        Object.entries(fontSize).map(([key, value]) => {
          if (Array.isArray(value)) {
            if (typeof value[1] === "object" && value[1] !== null) {
              return [key, [value[0] as string, { ...value[1] }]];
            }
            return [key, [value[0] as string, value[1] as string]];
          }
          return [key, value];
        })
      ),
      fontWeight,
      borderRadius,
      boxShadow,
    },
  },
  plugins: [],
};

export default config;
