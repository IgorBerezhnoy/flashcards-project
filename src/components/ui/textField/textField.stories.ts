import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "@/components/ui/textField/textField";

const meta: Meta<typeof TextField> = {
  component: TextField,
  tags: ["autodocs"],
  title: "Components/UI/TextField",
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    disabled: false,
    error: null,
    label: "Input",
    onChange: () => {},
    type: "default",
    value: "value",
  },
};
export const DefaultWithError: Story = {
  args: {
    disabled: false,
    error: "Very big error!!!",
    label: "Input",
    onChange: () => {},
    type: "default",
    value: "value",
  },
};
export const Password: Story = {
  args: {
    disabled: false,
    error: null,
    label: "Input",
    onChange: () => {},
    type: "password",
    value: "value",
  },
};
export const Search: Story = {
  args: {
    disabled: false,
    error: null,
    label: "Input",
    onChange: () => {},
    type: "search",
    value: "value",
  },
};
