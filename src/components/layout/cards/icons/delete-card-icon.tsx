import { toast } from 'react-toastify'

import { TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { DialogClose } from '@/components/ui/modal/modalClose'
import { Typography } from '@/components/ui/typography'
import { useDeleteCardMutation } from '@/services/cards/cards.service'
import { ErrorType } from '@/services/decks/decks.types'

import s from '../../../ui/table/table.module.scss'

export const DeleteCardIcon = ({
  cardId,
  className,
  deckId,
}: {
  cardId: string
  className: string
  deckId: string
}) => {
  const [deleteCard, { error, isError }] = useDeleteCardMutation()

  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message)
  }

  return (
    <Modal title={'Delete Card'} trigger={<TrashOutline className={`${s.icon} ${className}`} />}>
      <div className={s.contentWrapper}>
        <div className={s.contentDeleteBody}>
          <Typography as={'div'}>
            Do you really want to remove <span>Card Name</span>?
          </Typography>
          <Typography as={'div'}>All cards will be deleted.</Typography>
        </div>
        <DialogClose>
          <div className={s.buttons}>
            <Button variant={'secondary'}>Cancel</Button>
            <Button onClick={() => deleteCard({ cardId, deckId })} variant={'primary'}>
              Delete Card
            </Button>
          </div>
        </DialogClose>
      </div>
    </Modal>
  )
}
