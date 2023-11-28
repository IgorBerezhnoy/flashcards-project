import { TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import { useDeleteDeckMutation } from '@/services/decks.service'

import s from '@/components/ui/table/table.module.scss'

export const DeleteDeckIcon = ({ id }: { id: string }) => {
  const [deleteDeck, { isLoading: isDeckBeingDeleted }] = useDeleteDeckMutation()

  console.log(isDeckBeingDeleted)

  return (
    <Modal trigger={<TrashOutline className={s.icon} />}>
      <div className={s.contentWrapper}>
        <div className={s.contentDeleteBody}>
          <Typography as={'div'}>
            Do you really want to remove <span>Pack Name</span>?
          </Typography>
          <Typography as={'div'}>All cards will be deleted.</Typography>
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button onClick={() => deleteDeck({ id })} variant={'primary'}>
            Delete Pack
          </Button>
        </div>
      </div>
    </Modal>
  )
}
