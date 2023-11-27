import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/components/ui/header/header'

import foto from '../../../../public/img/userPhotoForTest.png'

const meta = {
  argTypes: {
    onClick: {
      action: 'Sign In',
    },
  },
  component: Header,
  tags: ['autodocs'],
  title: 'Components/UI/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LogOut: Story = {
  args: {
    isLogin: false,
  },
}
export const LogIn: Story = {
  args: {
    isLogin: true,
    userPhoto: foto,
  },
}
