import type { Meta, StoryObj } from '@storybook/react'

import { Profile } from './'

const meta = {
  component: Profile,
  tags: ['autodocs'],
  title: 'Components/Layout/Forms/Profile',
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const ProfileForm: Story = {
  args: {
    data: {
      email: 'test.@test.com',
      name: 'Alex',
      src: 'public/img/userPhotoForTest.png',
    },
  },
}
