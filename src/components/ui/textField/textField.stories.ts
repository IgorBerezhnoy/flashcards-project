import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/textField/textField'

import s from './textField.module.scss'

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
    className: s.storyBook,
    disabled: false,
    errorMessage: '',
    label: 'Input',
    type: 'default',
    value: 'value',
  },
}
export const DefaultWithPlaceholder: Story = {
  args: {
    className: s.storyBook,
    disabled: false,
    label: 'Input',
    placeholder: 'placeholder',
    type: 'default',
    value: 'value',
  },
}
export const DefaultWithError: Story = {
  args: {
    className: s.storyBook,
    disabled: false,
    errorMessage: 'Very big error!!!',
    label: 'Input',
    type: 'default',
    value: 'value',
  },
}
export const Password: Story = {
  args: {
    className: s.storyBook,
    disabled: false,
    errorMessage: null,
    label: 'Input',
    type: 'password',
    value: 'value',
  },
}
export const Search: Story = {
  args: {
    className: s.storyBook,
    disabled: false,
    errorMessage: null,
    label: 'Input',
    type: 'search',
    value: 'value',
  },
}
