import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from './'

const meta = {
  component: SignIn,
  tags: ['autodocs'],
  title: 'Components/Layout/Forms/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const SingInForm: Story = {}
