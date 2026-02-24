import type { Config } from "tailwindcss";
import { colors, spacing, fontSize, fontWeight, borderRadius, boxShadow } from "@nova/tokens";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
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
            // Convert readonly tuple to mutable tuple
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
