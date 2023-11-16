import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/textField/textField'

const meta: Meta<typeof TextField> = {
  argTypes: {
    clearText: {
      action: 'clearText',
    },
    onChange: {
      action: 'Change',
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/UI/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    disabled: false,
    error: '',
    label: 'Input',
    type: 'default',
    value: 'value',
  },
}
export const DefaultWithError: Story = {
  args: {
    disabled: false,
    error: 'Very big error!!!',
    label: 'Input',
    type: 'default',
    value: 'value',
  },
}
export const Password: Story = {
  args: {
    disabled: false,
    error: null,
    label: 'Input',
    type: 'password',
    value: 'value',
  },
}
export const Search: Story = {
  args: {
    disabled: false,
    error: null,
    label: 'Input',
    type: 'search',
    value: 'value',
  },
}
