import { ReactNode } from 'react'

import { WhitePerson } from '@/icons'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from '@/components/ui/dropdown/dropdown.module.scss'

type Type = {
  children: ReactNode
  className?: string
  title: string
}
export const DropDownItem = (props: Type) => {
  const { children, className, title } = props

  return (
    <div>
      <DropdownMenuRadix.Item className={`${s.dropdownMenuItem} ${className ? className : ''}`}>
        <div>
          {children}
          <WhitePerson color={'white'} height={'16'} width={'16'} />
        </div>
        {title}
      </DropdownMenuRadix.Item>
      <DropdownMenuRadix.Separator className={s.dropdownMenuSeparator} />
    </div>
  )
}
