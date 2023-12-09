import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'

import { Edit2Outline, MoreVerticalOutline, PlayCircleOutline, TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DropDownItem, DropdownMenu, DropdownSeparator } from '@/components/ui/dropdownMenu'
import { Modal } from '@/components/ui/modal/modal'
import { DialogClose } from '@/components/ui/modal/modalClose'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { useDeleteDeckMutation, usePatchDeckMutation } from '@/services/decks/decks.service'

import s1 from '../../../ui/table/table.module.scss'
import s from './../cards.module.scss'

export const DropdownCards = () => {
  const { id } = useParams()
  const [editDeck] = usePatchDeckMutation()

  const [isOpenEditeModal, setIsOpenEditeModal] = useState<boolean>(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const [deleteDeck] = useDeleteDeckMutation()
  const [isDeleted, setIsDeleted] = useState(false)
  const onClickDelete = () => {
    deleteDeck(id ?? '')
    setIsDeleted(true)
  }

  if (isDeleted) {
    return <Navigate to={'/'} />
  }

  return (
    <>
      <DropdownMenu trigger={<MoreVerticalOutline />}>
        <div>
          <div>
            <DropDownItem asChild>
              <Link to={`/learn/${id}`}>
                <Typography as={'div'} className={s.dropdownMenuItem} variant={'caption'}>
                  <PlayCircleOutline className={s.icons} />
                  <div>Learn</div>
                </Typography>
              </Link>
            </DropDownItem>
            <DropdownSeparator />
            <DropDownItem>
              <Typography
                as={'div'}
                className={s.dropdownMenuItem}
                onClick={() => setIsOpenEditeModal(true)}
                variant={'caption'}
              >
                <Edit2Outline className={s.icons} />
                <div>Edit</div>
              </Typography>
            </DropDownItem>
            <DropdownSeparator />
            <DropDownItem>
              <Typography
                as={'div'}
                className={s.dropdownMenuItem}
                onClick={() => setIsOpenDeleteModal(true)}
                variant={'caption'}
              >
                <TrashOutline className={s.icons} />
                <div>Delete</div>
              </Typography>
            </DropDownItem>
          </div>
        </div>
      </DropdownMenu>
      <Modal onOpenChange={setIsOpenEditeModal} open={isOpenEditeModal} title={'Edit Pack'}>
        <div className={s1.contentWrapper}>
          <div className={s1.contentBody}>
            <TextField onValueChange={e => setValue(e)} value={value} />
            <Checkbox
              checked={isChecked}
              label={'Private pack'}
              onValueChange={() => setIsChecked(!isChecked)}
            />
          </div>
          <DialogClose>
            <div className={s1.buttons}>
              <Button variant={'secondary'}>Cancel</Button>
              <Button
                onClick={() => editDeck({ id: id!, isPrivate: isChecked, name: value })}
                variant={'primary'}
              >
                Save Changes
              </Button>
            </div>
          </DialogClose>
        </div>
      </Modal>
      <Modal onOpenChange={setIsOpenDeleteModal} open={isOpenDeleteModal} title={'Delete Pack'}>
        <div className={s1.contentWrapper}>
          <div className={s1.contentDeleteBody}>
            <Typography as={'div'}>
              Do you really want to remove <span>Pack Name</span>?
            </Typography>
            <Typography as={'div'}>All cards will be deleted.</Typography>
          </div>
          <DialogClose>
            <div className={s1.buttons}>
              <Button variant={'secondary'}>Cancel</Button>
              <Button onClick={onClickDelete} variant={'primary'}>
                Delete Pack
              </Button>
            </div>
          </DialogClose>
        </div>
      </Modal>
    </>
  )
}
