import { ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from '@/components/ui/dropdownMenu/dropdown.module.scss'

type Type = {
  children: ReactNode
  className?: string
  title: string
}
export const DropDownItem = (props: Type) => {
  const { children, className, title } = props

  return (
    <div>
      <DropdownMenuRadix.Separator className={s.dropdownMenuSeparator} />
      <DropdownMenuRadix.Item className={`${s.dropdownMenuItem} ${className ? className : ''}`}>
        <div>{children}</div>
        <Typography className={s.item_title} variant={'caption'}>
          {title}
        </Typography>
      </DropdownMenuRadix.Item>
    </div>
  )
}
