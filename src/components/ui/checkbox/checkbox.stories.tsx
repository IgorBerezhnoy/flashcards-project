import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/ui/checkbox/checkbox'

const meta = {
  argTypes: {
    onChange: {
      action: 'clicked',
    },
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/UI/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Defult: Story = {
  args: {
    checked: true,
    label: ' Accept terms and conditions.',
  },
}
export const Disabled: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
    label: ' Accept terms and conditions.',
  },
}
