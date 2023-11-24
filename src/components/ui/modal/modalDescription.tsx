import { ComponentPropsWithoutRef } from 'react'

import * as DialogRadix from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

type Props = ComponentPropsWithoutRef<typeof DialogRadix.Description>

export const DialogDescription = ({ className, ...rest }: Props) => {
  return <DialogRadix.Description className={clsx(s.dialogDescription, className)} {...rest} />
}
