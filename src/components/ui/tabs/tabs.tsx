import { FC, useState } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

export type TabsType = {
  disabled?: boolean
  title: string
  value: string
}

export type TabSwitcherPropsType = {
  tabs: TabsType[]
}

export const Tab: FC<TabSwitcherPropsType> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value)

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
              value={tab.value}
            >
              <span>{tab.title}</span>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div className={s.body}>
          {tabs.map((tab: TabsType, i: number) => (
            <Tabs.Content className={s.tabsContent} key={i} value={tab.value}>
              {tab.value}
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  )
}
