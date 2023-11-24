import { ComponentPropsWithoutRef } from 'react'

import * as DialogRadix from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

type Props = ComponentPropsWithoutRef<typeof DialogRadix.Title>

export const DialogTitle = ({ className, ...rest }: Props) => {
  return <DialogRadix.Title className={clsx(s.dialogTitle, className)} {...rest} />
}
