import { moduleMetadata, type Meta, type StoryObj, componentWrapperDecorator } from '@storybook/angular';
import Button from './button.component';
import { NucleusComponentLibraryModule, NucleusButton } from 'nucleus-ng-component-library';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const meta: Meta<Button> = {
  title: 'Nucleus/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    componentWrapperDecorator(
      (story) => `<div>${story}</div>`
    ),
  ],
  render: (args: Button) => ({
    props: {
      backgroundColor: null,
      ...args,
    }
  })
};

export default meta;
type Story = StoryObj<Button>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    buttonType: 'primary',
    label: 'Button',
  },
};