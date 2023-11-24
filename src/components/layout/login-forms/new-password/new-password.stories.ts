import type { Meta, StoryObj } from '@storybook/react'

import { NewPassword } from './'

const meta = {
  component: NewPassword,
  tags: ['autodocs'],
  title: 'Components/Layout/Forms/NewPassword',
} satisfies Meta<typeof NewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const NewPasswordForm: Story = {
  args: {
    onSubmit: data => console.log(data),
  },
}
