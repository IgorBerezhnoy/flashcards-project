import type { Meta, StoryObj } from "@storybook/react";

import { CheckboxUI } from "@/components/ui/checkbox/checkbox";

const meta = {
  component: CheckboxUI,
  tags: ["autodocs"],
  title: "Components/UI/Button",
} satisfies Meta<typeof CheckboxUI>;

export default meta;
type Story = StoryObj<typeof meta>;

const Default: Story = {};
