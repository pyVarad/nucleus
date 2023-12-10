import type { StorybookConfig } from "@storybook/angular";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-rtl"
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  staticDirs: ['../public', {
    from: "../src/assets",
    to: "/static/assets"
  }],
  docs: {
    autodocs: true,
  },
};
export default config;
