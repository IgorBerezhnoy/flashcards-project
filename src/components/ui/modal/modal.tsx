import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

type Props = {
  children: ReactNode
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof Dialog.Root>

export const Modal = (props: Props) => {
  const { children, trigger, ...rest } = props

  return (
    <Dialog.Root {...rest}>
      <Dialog.Trigger className={s.dialogTrigger}>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className={s.dialogContent}>{children}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
