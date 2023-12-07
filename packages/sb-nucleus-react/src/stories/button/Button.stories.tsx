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
    const label: ReactNode = ('label' in args ? args.label : 'Primary') as ReactNode;
    return <NucleusButton buttontype={args.buttontype} rounded={args.rounded} disabled={args.disabled}> {label}</NucleusButton >
  }
};

export const ButtonTypes: Story = {
  render: () => {
    NucleusButton.displayName = 'NucleusButton';
    return <div>
      <NucleusButton buttontype='primary'>Call to action</NucleusButton>
      <NucleusButton buttontype='secondary'>Outline</NucleusButton>
    </div>
  }
};
