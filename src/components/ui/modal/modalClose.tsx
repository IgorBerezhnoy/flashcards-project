import { ComponentPropsWithoutRef } from 'react'

import * as DialogRadix from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

type Props = ComponentPropsWithoutRef<typeof DialogRadix.Close>

export const DialogClose = ({ className, ...rest }: Props) => {
  return <DialogRadix.Close asChild className={clsx(s.dialogClose, className)} {...rest} />
}
