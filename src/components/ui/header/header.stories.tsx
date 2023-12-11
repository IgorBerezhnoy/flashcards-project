import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Header } from '@/components'
import { store } from '@/services'

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
  decorators: [
    Story => (
      <Provider store={store}>
        <BrowserRouter basename={''}>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
}

export const LogIn: Story = {
  args: {
    isLogin: true,
    userPhoto: foto,
  },
  decorators: [
    Story => (
      <Provider store={store}>
        <BrowserRouter basename={''}>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
}
