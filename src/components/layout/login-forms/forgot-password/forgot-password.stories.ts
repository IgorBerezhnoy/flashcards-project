import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './'

const meta = {
  component: ForgotPassword,
  tags: ['autodocs'],
  title: 'Components/Layout/Forms/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordTest: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
