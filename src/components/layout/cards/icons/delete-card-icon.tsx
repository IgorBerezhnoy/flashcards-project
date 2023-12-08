import { TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import { useDeleteCardMutation } from '@/services/cards/cards.service'

import s from './../cards.module.scss'

export const DeleteCardIcon = ({ cardId, deckId }: { cardId: string; deckId: string }) => {
  const [deleteCard] = useDeleteCardMutation()

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
