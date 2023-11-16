import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: [
        'body1',
        'body2',
        'caption',
        'h1',
        'h2',
        'h3',
        'large',
        'link1',
        'link2',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/UI/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'large',
  },
}
export const H1: Story = {
  args: {
    as: 'h1',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    as: 'h2',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    as: 'h3',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'h3',
  },
}
export const Subtitle1: Story = {
  args: {
    as: 'div',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'subtitle1',
  },
}
export const Subtitle2: Story = {
  args: {
    as: 'div',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'subtitle2',
  },
}
export const Body1: Story = {
  args: {
    as: 'div',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'body1',
  },
}
export const Body2: Story = {
  args: {
    as: 'div',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'body2',
  },
}
export const Caption: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'caption',
  },
}
export const Overline: Story = {
  args: {
    as: 'div',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'overline',
  },
}
export const Link1: Story = {
  args: {
    as: 'a',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    href: 'https://www.google.com',
    variant: 'link1',
  },
}
export const Link2: Story = {
  args: {
    as: 'a',
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    href: 'https://www.google.com',
    variant: 'link2',
  },
}
