import { toast } from 'react-toastify'

import { TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { Typography } from '@/components/ui/typography'
import { useDeleteDeckMutation } from '@/services/decks/decks.service'
import { ErrorType } from '@/services/decks/decks.types'

import s from './../decks.module.scss'

export const DeleteDeckIcon = ({ id }: { id: string }) => {
  const [deleteDeck, { error, isError }] = useDeleteDeckMutation()

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
          <Button onClick={() => deleteDeck(id)} variant={'primary'}>
            Delete Pack
          </Button>
        </div>
      </div>
    </Modal>
  )
}
