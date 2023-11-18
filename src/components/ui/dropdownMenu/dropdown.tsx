import { ReactNode } from 'react'

import { DropDownItem } from '@/components/ui/dropdown/dropDownItem'
import { LogOut } from '@/icons'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from '../dropdown/dropdown.module.scss'

type DropDownItemType = { icon: ReactNode; onClick: () => void; title: string }
type Photo = { alt: string; srs: string }
type PropsType = {
  divElement?: string
  dropDownItems: DropDownItemType[]
  email: string
  isProfile: boolean
  photo: Photo
  userName: string
}

export const DropdownMenu = (props: PropsType) => {
  const { divElement, dropDownItems, email, isProfile, photo, userName } = props

  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger asChild>
        {isProfile ? (
          <img alt={'usePhoto'} className={s.iconButton} src={photo.srs} />
        ) : (
          <div>{divElement}</div>
        )}
      </DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content className={s.dropdownMenuContent} sideOffset={5}>
          {isProfile && (
            <>
              <DropdownMenuRadix.Label className={s.dropdownMenuItem}>
                <div className={s.photoAndEmail}>
                  <img alt={'usePhoto'} src={photo.srs} />
                  <div className={s.nameAndEmail}>
                    <div className={s.name}>{userName}</div>
                    <div className={s.email}>{email}</div>
                  </div>
                </div>
              </DropdownMenuRadix.Label>
              <DropdownMenuRadix.Separator className={s.dropdownMenuSeparator} />
            </>
          )}
          {dropDownItems.map((el, index) => (
            <DropDownItem key={index} title={el.title}>
              {el.icon}
            </DropDownItem>
          ))}
          <DropdownMenuRadix.Item className={s.dropdownMenuItem}>
            <div>
              <LogOut color={'white'} height={'16'} width={'16'} />
            </div>
            Sign Out
          </DropdownMenuRadix.Item>
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}
