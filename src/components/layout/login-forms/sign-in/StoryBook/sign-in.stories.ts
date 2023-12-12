import type { Meta, StoryObj } from '@storybook/react'

import { SignInSB } from '@/components/layout/login-forms/sign-in/StoryBook/sign-in.SB'

const meta = {
  component: SignInSB,
  tags: ['autodocs'],
  title: 'Components/Layout/Forms/SignIn',
} satisfies Meta<typeof SignInSB>

export default meta
type Story = StoryObj<typeof meta>

export const SingInForm: Story = {}
