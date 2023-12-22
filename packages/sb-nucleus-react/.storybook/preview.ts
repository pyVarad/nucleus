/** @type { import('@storybook/react').Preview } */
import { defineCustomElements } from 'nucleus-react';

defineCustomElements();

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewMode: 'story',
    direction: 'ltr',
    docs: {
      toc: {
        title: 'Table of Contents',
        contentsSelector: '.sbdocs-content'
      },
      canvas: {
        sourceState: 'shown'
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
