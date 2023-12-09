import { toast } from 'react-toastify'

import { TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { DialogClose } from '@/components/ui/modal/modalClose'
import { Typography } from '@/components/ui/typography'
import { useDeleteDeckMutation } from '@/services/decks/decks.service'
import { ErrorType } from '@/services/decks/decks.types'

import s from '@/components/ui/table/table.module.scss'

type Props = {
  className?: string
  id: string
}
export const DeleteDeckIcon = ({ className, id }: Props) => {
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
    <Modal title={'Delete Pack'} trigger={<TrashOutline className={`${s.icon} ${className}`} />}>
      <div className={s.contentWrapper}>
        <div className={s.contentDeleteBody}>
          <Typography as={'div'}>
            Do you really want to remove <span>Pack Name</span>?
          </Typography>
          <Typography as={'div'}>All cards will be deleted.</Typography>
        </div>
        <DialogClose>
          <div className={s.buttons}>
            <Button variant={'secondary'}>Cancel</Button>
            <Button onClick={() => deleteDeck(id)} variant={'primary'}>
              Delete Pack
            </Button>
          </div>
        </DialogClose>
      </div>
    </Modal>
  )
}
