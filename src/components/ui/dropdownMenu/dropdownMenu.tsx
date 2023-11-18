import { ReactNode } from 'react'

import { DropdownItems } from '@/components/ui/dropdownMenu/dropdownItems'
import { DropdownUserLabel } from '@/components/ui/dropdownMenu/dropdownUserLabel'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

export const DropdownMenu = (props: PropsType) => {
  const { divElement, dropDownItems, isProfile, user } = props

  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger asChild>
        {isProfile ? (
          <img alt={'usePhoto'} className={s.iconButton} src={user.photo.srs} />
        ) : (
          <div>{divElement}</div>
        )}
      </DropdownMenuRadix.Trigger>
      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content className={s.dropdownMenuContent} sideOffset={5}>
          {isProfile && <DropdownUserLabel user={user} />}
          <DropdownItems dropDownItems={dropDownItems} />
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}

export type DropDownItemType = { icon: ReactNode; onClick: () => void; title: string }
export type UserType = {
  email: string
  photo: Photo
  userName: string
}
type Photo = { alt: string; srs: string }
type PropsType = {
  divElement?: string
  dropDownItems: DropDownItemType[]
  isProfile: boolean
  user: UserType
}
