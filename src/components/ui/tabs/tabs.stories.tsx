import { Tab } from '@/components/ui/tabs/tabs'
import { Meta } from '@storybook/react'

export default {
  component: Tab,
  title: 'Components/UI/Tab',
} as Meta<typeof Tab>

export const Default = () => {
  const tabs = [
    { title: 'Switcher', value: 'tab 1' },
    { title: 'Switcher', value: 'tab 2' },
    { title: 'Switcher', value: 'tab 3' },
    { title: 'Switcher', value: 'tab 4' },
    { title: 'Switcher', value: 'tab 5' },
  ]

  return <Tab tabs={tabs} />
}
