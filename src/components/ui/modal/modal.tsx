import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Close } from '@/assets'
import { DialogClose } from '@/components/ui/modal/modalClose'
import { DialogTitle } from '@/components/ui/modal/modalTitle'
import { Typography } from '@/components/ui/typography'
import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type Props = {
  children?: ReactNode
  showHeader?: boolean
  title?: string
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof Dialog.Root>

export const Modal = (props: Props) => {
  const { children, showHeader = true, title, trigger, ...rest } = props

  return (
    <Dialog.Root {...rest}>
      <Dialog.Trigger asChild className={s.dialogTrigger}>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className={s.dialogContent}>
          {showHeader && (
            <div className={s.header}>
              <DialogTitle asChild>
                <Typography className={s.title}>{title}</Typography>
              </DialogTitle>
              <DialogClose className={s.closeButton}>
                <Close />
              </DialogClose>
            </div>
          )}
          <div className={s.contentBlock}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
