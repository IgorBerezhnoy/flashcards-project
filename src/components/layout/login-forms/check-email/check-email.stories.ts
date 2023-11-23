import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmailForm } from './'

const meta = {
  component: CheckEmailForm,
  tags: ['autodocs'],
  title: 'Components/Layout/Forms/CheckEmailForm',
} satisfies Meta<typeof CheckEmailForm>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailTest: Story = {
  args: {
    email: 'test@gmail.com',
  },
}
