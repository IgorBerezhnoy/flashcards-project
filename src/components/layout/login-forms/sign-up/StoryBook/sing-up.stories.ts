import type { Meta, StoryObj } from '@storybook/react'

import { SignUpSB } from '@/components/layout/login-forms/sign-up/StoryBook/sign-up.SB.'

const meta = {
  argTypes: {},
  component: SignUpSB,
  tags: ['autodocs'],
  title: 'Components/Layout/Forms/SignUp',
} satisfies Meta<typeof SignUpSB>

export default meta
type Story = StoryObj<typeof meta>

export const SingUpForm: Story = {}
