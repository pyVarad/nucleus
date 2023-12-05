import { componentWrapperDecorator, moduleMetadata, type Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { CommonModule } from "@angular/common";
import { enableProdMode } from "@angular/core";
import { NucleusButton, NucleusComponentLibraryModule } from "nucleus-ng-component-library";
import { defineCustomElements } from "nucleus/loader";

setCompodocJson(docJson);
enableProdMode();
defineCustomElements();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    decorator: [
      moduleMetadata({
        providers: [],
        imports: [CommonModule, NucleusComponentLibraryModule]
      })
    ],
    viewMode: 'story',
    docs: {
      story: {
        inline: true
      }
    },
    direction: 'ltr',
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  componentWrapperDecorator((story) => `<div class="nucleus-container">${story}</div>`),
];

export default preview;
