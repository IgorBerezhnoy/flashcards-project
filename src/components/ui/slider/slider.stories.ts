import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './slider'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/UI/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderTest: Story = {
  // @ts-ignore
  args: {
    value: [20, 59],
  },
}
