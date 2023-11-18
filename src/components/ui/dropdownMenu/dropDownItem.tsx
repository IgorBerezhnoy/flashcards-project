import { ComponentPropsWithoutRef } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from '@/components/ui/dropdownMenu/dropdown.module.scss'

type Props = ComponentPropsWithoutRef<typeof DropdownMenuRadix.Item>

export const DropDownItem = ({ className, ...rest }: Props) => {
  return <DropdownMenuRadix.Item className={clsx(s.dropdownMenuItem, className)} {...rest} />
}
