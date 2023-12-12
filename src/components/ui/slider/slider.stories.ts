import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from '@/components'

const meta = {
  argTypes: {},
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/UI/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>
export const DefaultSlider: Story = {
  args: {
    defaultValue: [10, 75],
    localSliderValue: [10, 75],
    value: [10, 75],
  },
}
