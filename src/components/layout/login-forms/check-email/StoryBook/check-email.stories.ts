import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmailFormSB } from '@/components/layout/login-forms/check-email/StoryBook/check-email.SB'

const meta = {
  component: CheckEmailFormSB,
  tags: ['autodocs'],
  title: 'Components/Layout/Forms/CheckEmailForm',
} satisfies Meta<typeof CheckEmailFormSB>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailTest: Story = {
  args: {
    email: 'test@gmail.com',
  },
}
