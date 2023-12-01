import { FC } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Tabs from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

export type TabsType = {
  disabled?: boolean
  title: string
  value?: string | undefined
}

export type TabSwitcherPropsType = {
  activeTab: string
  setActiveTab: (tab: string) => void
  showValue?: boolean
  tabs: TabsType[]
}

export const Tab: FC<TabSwitcherPropsType> = ({
  activeTab,
  setActiveTab,
  showValue = false,
  tabs,
}) => {
  console.log(tabs[0].title)
  console.log(tabs[1].title)

  return (
    <div className={s.wrapper}>
      <Tabs.Root
        className={s.tabsRoot}
        defaultValue={tabs[0].value}
        onValueChange={setActiveTab}
        orientation={'horizontal'}
        value={activeTab}
      >
        <Tabs.List className={s.tabsList}>
          {tabs.map((tab: TabsType, i: number) => (
            <Tabs.Trigger
              className={`${s.tabsTrigger} ${activeTab === tab.value ? s.active : ''}`}
              key={i}
              value={tab.value || ''}
            >
              <Typography as={'span'}>{tab.title}</Typography>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div className={s.body}>
          {tabs.map((tab: TabsType, i: number) => (
            <Tabs.Content className={s.tabsContent} key={i} value={tab.value || ''}>
              {showValue && tab.value}
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  )
}
