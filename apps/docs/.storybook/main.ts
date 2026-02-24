import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, join, resolve } from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@aditya-karedla/core": resolve(__dirname, "../../../packages/core/src"),
        "@aditya-karedla/tokens": resolve(__dirname, "../../../packages/tokens/src"),
        "@aditya-karedla/hooks": resolve(__dirname, "../../../packages/hooks/src"),
      };
    }
    return config;
  },
};

export default config;
