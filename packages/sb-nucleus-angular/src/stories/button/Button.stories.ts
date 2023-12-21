import { Meta, StoryObj } from "@storybook/angular";
import { buttonArgsType } from "./button.args";

export default ({
  title: "components/Button",
  argTypes: buttonArgsType,
  args: {
    label: "primary button",
  },
  parameters: {
    controls: {
      expanded: true,
      exclude: ["mode"],
    },
  },
} as Meta);

export const Primary: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
    <nucleus-button key="primary-example" 
      [type]="type"
      [disabled]="disabled"
      [rounded]="rounded"
      [size]="size">{{label}} </nucleus-button>
    `,
  }),
  name: "Primary",
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    ...buttonArgsType,
  },
};

export const buttonTypes: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
    <nucleus-button type='primary'>button</nucleus-button>
    <nucleus-button type='secondary'>button</nucleus-button>
    `,
  }),
  name: "Button Types",
  parameters: {
    docs: {
      description: {
        story: ``
      }
    }
  }
};
