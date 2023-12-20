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
      [buttontype]="buttontype"
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
    <nucleus-button buttontype='primary'>button</nucleus-button>
    <nucleus-button buttontype='secondary'>button</nucleus-button>
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
