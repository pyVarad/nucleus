import type { Meta, StoryObj } from '@storybook/react';
import { buttonArgsType } from './button.args';
import { Button } from './Button';

const meta = {
  title: "component/Button",
  tags: ['autodocs'],
  component: Button,
  argTypes: buttonArgsType,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
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