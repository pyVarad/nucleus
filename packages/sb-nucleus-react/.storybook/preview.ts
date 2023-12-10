/** @type { import('@storybook/react').Preview } */
import { defineCustomElements } from 'nucleus-react';

defineCustomElements();

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewMode: 'story',
    direction: 'ltr',
    docs: {
      source: {
        transform: (code: string) => {
          return code
            .replace(/^.*render|{|}|:|\(|\).*$\n/gm, "")
            .replace(/(.*displayName.*)/gm, "")
            .replace(/(.*div.*)/gm, "")
            .replace(/^ {2,}/gm, "");
        }
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
