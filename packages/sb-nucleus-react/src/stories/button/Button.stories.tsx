import type { Meta, StoryObj } from '@storybook/react';
import { buttonArgsType } from './Button.args';
import { NucleusButton } from 'nucleus-react';
import { ReactNode } from 'react';

const meta = {
  title: "component/Button",
  tags: ['autodocs'],
  component: NucleusButton,
  argTypes: buttonArgsType,
} satisfies Meta<typeof NucleusButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    NucleusButton.displayName = 'NucleusButton';
    const buttonType = args.buttontype || 'primary';
    const label: ReactNode = ('label' in args ? args.label : 'Primary') as ReactNode;
    return <NucleusButton buttontype={buttonType}>{label}</NucleusButton>

  }
};

export const callToAction: Story = {
  args: {
    ...Primary.args,
    buttontype: 'callToAction'
  },
  name: 'CallToAction',
};

export const outline: Story = {
  args: {
    ...Primary.args,
    buttontype: 'outline'
  },
  name: 'Outline',
};

export const text: Story = {
  args: {
    ...Primary.args,
    buttontype: 'text'
  },
  name: 'Text',
};