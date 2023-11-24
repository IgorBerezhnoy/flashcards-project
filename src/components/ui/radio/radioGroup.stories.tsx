import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/UI/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    radioGroup: [
      { id: '1', label: 'RadioGroup1', value: 'RadioGroup1' },
      {
        id: '2',
        label: 'RadioGroup2',
        value: 'RadioGroup2',
      },
      { id: '3', label: 'RadioGroup3', value: 'RadioGroup3' },
    ],
  },
}
export const Disabled: Story = {
  args: {
    disabled: true,
    radioGroup: [
      { id: '1', label: 'RadioGroup1', value: 'RadioGroup1' },
      {
        id: '2',
        label: 'RadioGroup2',
        value: 'RadioGroup2',
      },
      { id: '3', label: 'RadioGroup3', value: 'RadioGroup3' },
    ],
  },
}
export const DisabledWithValue: Story = {
  args: {
    defaultValue: 'RadioGroup2',
    disabled: true,
    radioGroup: [
      { id: '1', label: 'RadioGroup1', value: 'RadioGroup1' },
      {
        id: '2',
        label: 'RadioGroup2',
        value: 'RadioGroup2',
      },
      { id: '3', label: 'RadioGroup3', value: 'RadioGroup3' },
    ],
  },
}
