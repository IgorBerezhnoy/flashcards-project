import type { Meta, StoryObj } from '@storybook/react'

import { ArrowIcon } from '@/icons'

import { Button } from './'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/UI/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: `Button`,
    disabled: false,
    variant: 'primary',
  },
}
export const PrimaryWithIcon: Story = {
  args: {
    children: (
      <>
        <ArrowIcon />
        <div>Button primary</div>
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    children: 'Secondary Button',
    variant: 'secondary',
  },
}
export const Tertiary: Story = {
  args: {
    ...Primary.args,
    children: 'Tertiary Button',
    variant: 'tertiary',
  },
}
export const Link: Story = {
  args: {
    as: 'a',
    children: 'Tertiary Button',
    disabled: false,
    href: 'https://www.google.com',
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    ...Primary.args,
    children: 'Full Width Button',
    fullWidth: true,
    variant: 'primary',
  },
}
export const ButtonPrimary: Story = {
  args: {
    ...Primary.args,
    children: (
      <>
        <ArrowIcon />
        <div>Button secondary</div>
      </>
    ),
    variant: 'secondary',
  },
}
