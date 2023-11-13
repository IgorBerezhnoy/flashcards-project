import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./";

const meta = {
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
      options: ["primary", "secondary", "tertiary", "link"],
    },
  },
  component: Button,
  tags: ["autodocs"],
  title: "Components/UI/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    disabled: false,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: "Secondary Button",
    variant: "secondary",
  },
};
export const Tertiary: Story = {
  args: {
    ...Primary.args,
    children: "Tertiary Button",
    variant: "tertiary",
  },
};
export const Link: Story = {
  args: {
    as: "button",
    children: "Tertiary Button",
    disabled: false,
    href: "https://www.google.com",
    variant: "link",
  },
};

export const FullWidth: Story = {
  args: {
    ...Primary.args,
    children: "Full Width Button",
    fullWidth: true,
    variant: "primary",
  },
};
