import type { Meta } from '@storybook/react'

import { Tab } from './'

export default {
  args: {
    tabs: [
      { title: 'Switcher One', value: 'switcherOne' },
      { title: 'Switcher Two', value: 'switcherTwo' },
      { title: 'Switcher Three', value: 'switcherThree' },
      { title: 'Switcher Four', value: 'switcherFour' },
    ],
  },
  component: Tab,
  tags: ['autodocs'],
  title: 'Components/UI/Tab',
} satisfies Meta<typeof Tab>

export const Simple = {
  args: {
    tabs: [
      { title: 'Switcher One', value: 'switcherOne' },
      { title: 'Switcher Two', value: 'switcherTwo' },
      { title: 'Switcher Three', value: 'switcherThree' },
      { title: 'Switcher Four', value: 'switcherFour' },
    ],
  },
}
