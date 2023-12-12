import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordSB } from '@/components/layout/login-forms/forgot-password/StoryBook/forgot-password.SB'

const meta = {
  component: ForgotPasswordSB,
  tags: ['autodocs'],
  title: 'Components/Layout/Forms/ForgotPassword',
} satisfies Meta<typeof ForgotPasswordSB>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPasswordTest: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
