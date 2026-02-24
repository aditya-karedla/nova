import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@aditya-karedla/core";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#0a0a0a",
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";
      return (
        <ThemeProvider defaultTheme={theme}>
          <div className="p-4">
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: ["light", "dark"],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
