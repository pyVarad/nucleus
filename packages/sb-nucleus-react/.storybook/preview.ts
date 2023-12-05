/** @type { import('@storybook/react').Preview } */
import { defineCustomElements } from 'nucleus-react';

defineCustomElements();

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewMode: 'story',
    direction: 'ltr',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
