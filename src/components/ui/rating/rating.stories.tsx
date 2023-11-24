import type { Meta, StoryObj } from '@storybook/react'

import { Rating } from './'

const meta = {
  argTypes: {
    onClick: {
      action: 'I wanna change',
    },
  },
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/UI/Rating',
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Zero: Story = {
  args: {
    value: 0,
  },
}
export const One: Story = {
  args: {
    value: 1,
  },
}
export const Two: Story = {
  args: {
    value: 2,
  },
}
export const Three: Story = {
  args: {
    value: 3,
  },
}
export const Four: Story = {
  args: {
    value: 4,
  },
}
export const Five: Story = {
  args: {
    value: 5,
  },
}
