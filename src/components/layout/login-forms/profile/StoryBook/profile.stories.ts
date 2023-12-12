import type { Meta, StoryObj } from '@storybook/react'

import { ProfileSB } from '@/components/layout/login-forms/profile/StoryBook/profile.SB'

const meta = {
  component: ProfileSB,
  tags: ['autodocs'],
  title: 'Components/Layout/Forms/ProfilePage',
} satisfies Meta<typeof ProfileSB>

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
