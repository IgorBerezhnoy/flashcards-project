import type { Meta, Story } from '@storybook/react'

import { Linear } from '@/components/ui/linear/linear'

const meta: Meta = {
  argTypes: {},
  component: Linear,
  tags: ['autodocs'],
  title: 'Components/UI/Linear',
}

export default meta

export const Default: Story = () => <Linear />
