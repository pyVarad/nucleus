import { Meta, StoryObj } from '@storybook/angular';
import { badgeArgtypes } from './button.args';

export default {
  title: 'components/Button',
  argTypes: badgeArgtypes,
  args: {
    label: 'primary button'
  },
  parameters: {
    controls: {
      expanded: true,
      exclude: ['mode'],
    },
  },
} as Meta;

export const Primary: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
    <nucleus-button 
      [buttontype]="buttontype">{{label}}
    </nucleus-button>
    `,
  }),
  name: 'Primary',
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    ...badgeArgtypes,
  },
};

export const callToAction: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
    <nucleus-button 
      buttontype='callToAction'>button
    </nucleus-button>
    `,
  }),
  name: 'CallToAction',
};

export const outline: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
    <nucleus-button 
      buttontype='outline'>button
    </nucleus-button>
    `,
  }),
  name: 'Outline',
};

export const text: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
    <nucleus-button 
      buttontype='text'>button
    </nucleus-button>
    `,
  }),
  name: 'Text',
};