import type { Meta, StoryObj } from '@storybook/react'

import { SignUp } from './'

const meta = {
  argTypes: {},
  component: SignUp,
  tags: ['autodocs'],
  title: 'Components/Layout/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const SingUpForm: Story = {}
