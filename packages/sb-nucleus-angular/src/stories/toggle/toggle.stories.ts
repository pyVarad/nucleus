import { Meta, StoryObj } from "@storybook/angular";
import { toggleArgsType } from "./toggle.args";

export default ({
  title: "components/Toggle",
  argTypes: { ...toggleArgsType, toggle: { action: 'toggle' } },
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
    <nucleus-toggle key="primary-example" 
      [type]="type"
      [disabled]="disabled"
      [checked]="checked"
      [size]="size"/>
    `,
  }),
  name: "Primary",
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    ...toggleArgsType,
  },
};

export const secondary: StoryObj = {
  render: (args) => ({
    template: `
    <nucleus-toggle type='secondary' checked />
    `,
  }),
  name: "Secondary",
  parameters: {
    docs: {
      description: {
        story: `The Nucleus Toggle component offers two variants that are controlled using the 'type' attribute within the 'NucleusToggle' component. Please refer to the provided code snippet for further details and implementation specifics.`
      }
    }
  }
};

export const sizes: StoryObj = {
  render: () => ({
    template: `
    <div [ngStyle]="{'display': 'flex', 'flex-direction': 'row', 'gap': '3em'}">
      <nucleus-toggle type='primary' size='xs'/>
      <nucleus-toggle type='primary' size='sm'/>
      <nucleus-toggle type='primary' size='md'/>
      <nucleus-toggle type='primary' size='lg'/>
      <nucleus-toggle type='primary' size='xl'/>
    </div>
    `,
  }),
  name: "Sizes",
  parameters: {
    docs: {
      description: {
        story: `The Nucleus Toggle component provides various sizes corresponding to different screen resolutions, determined by the 'size' attribute. Valid values for this attribute include 'xs', 'sm', 'md', 'lg', and 'xl'. For more detailed examples, please refer to the provided examples below.`
      }
    }
  }
};

export const eventhandlers: StoryObj = {

  render: (args) => ({
    props: args,
    template: `
    <nucleus-toggle checked type='primary' (switchToggle)="toggle($event)"/>
    `,
  }),
  name: "EventControls",
  parameters: {
    docs: {
      description: {
        story: `The toggle component emits an event "switchToggle" upon click. Developers and subscribe to this event and trigger chained action.`
      }
    }
  }
};
