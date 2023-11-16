import { Card } from '@/components/ui/Card/card'
import { Typography } from '@/components/ui/typography'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/UI/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Typography variant={'large'}>I am card</Typography>,
    style: {
      height: '34.5rem',
      padding: '20px',
      width: '26.25rem',
    },
  },
}
