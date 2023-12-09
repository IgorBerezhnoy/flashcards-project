import { toast } from 'react-toastify'

import { TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import { useDeleteCardMutation } from '@/services/cards/cards.service'
import { ErrorType } from '@/services/decks/decks.types'

import s from './../cards.module.scss'

export const DeleteCardIcon = ({ cardId, deckId }: { cardId: string; deckId: string }) => {
  const [deleteCard, { error, isError }] = useDeleteCardMutation()

  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message, {
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: 'top-right',
      progress: undefined,
      theme: 'light',
    })
  }

  return (
    <Modal title={'Delete Card'} trigger={<TrashOutline />}>
      <div className={s.contentWrapper}>
        <div className={s.contentDeleteBody}>
          <Typography as={'div'}>
            Do you really want to remove <span>Card Name</span>?
          </Typography>
          <Typography as={'div'}>All cards will be deleted.</Typography>
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button onClick={() => deleteCard({ cardId, deckId })} variant={'primary'}>
            Delete Card
          </Button>
        </div>
      </div>
    </Modal>
  )
}
