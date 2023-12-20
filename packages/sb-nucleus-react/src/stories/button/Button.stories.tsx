import type { Meta, StoryObj } from "@storybook/react";
import { NucleusButton } from "nucleus-react";
import { ReactNode } from "react";
import { buttonArgsType } from "./Button.args";

const meta = {
  title: "component/Button",
  tags: ["autodocs"],
  component: NucleusButton,
  argTypes: buttonArgsType,
} satisfies Meta<typeof NucleusButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    NucleusButton.displayName = "NucleusButton";
    const label: ReactNode = ("label" in args ? args.label : "Primary") as ReactNode;
    return (
      <NucleusButton
        buttontype={args.buttontype || "primary"}
        rounded={args.rounded || false}
        disabled={args.disabled || false}
        size={args.size}
      >
        {" "}
        {label}
      </NucleusButton>
    );
  },
};

export const ButtonTypes: Story = {
};

ButtonTypes.render = () => {
  NucleusButton.displayName = "NucleusButton";
  return (
    <div>
      <NucleusButton buttontype="primary">Call to action</NucleusButton>
      <NucleusButton buttontype="secondary">Outline</NucleusButton>
    </div>
  );
}

ButtonTypes.parameters = {
  docs: {
    source: {
      language: 'html',
      format: true,
      code: `
      <div>
        <NucleusButton buttontype="primary">Call to action</NucleusButton>
        <NucleusButton buttontype="secondary">Outline</NucleusButton>
      </div>
      `
    }
  }
}
