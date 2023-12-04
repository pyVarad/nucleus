import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { NucleusComponentLibraryModule } from 'nucleus-ng-component-library';
import { badgeArgtypes } from './button.args';

export default {
  title: 'components/Button',
  decorators: [
    moduleMetadata({
      imports: [NucleusComponentLibraryModule],
    }),
  ],
  argTypes: badgeArgtypes,
  parameters: {
    controls: {
      expanded: true,
      exclude: ['mode'],
    },
  },
} as Meta;

export const WithBasicUsage: StoryObj = {
  render: (args) => ({
    props: args,
    template: `
    <nucleus-button buttontype='primary'>button</nucleus-button>
    `,
  }),
  name: 'basic usage',
};