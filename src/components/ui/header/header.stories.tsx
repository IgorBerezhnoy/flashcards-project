import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "@/components/ui/header/header";

const meta = {
  argTypes: {
    onClick: {
      action: "Sign In",
    },
  },
  component: Header,
  tags: ["autodocs"],
  title: "Components/UI/Header",
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isLogin: false,
  },
};
