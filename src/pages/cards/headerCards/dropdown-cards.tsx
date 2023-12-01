import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'

import { Edit2Outline, MoreVerticalOutline, PlayCircleOutline, TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DropDownItem, DropdownMenu, DropdownSeparator } from '@/components/ui/dropdownMenu'
import { Modal } from '@/components/ui/modal/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { useDeleteDeckMutation, usePatchDeckMutation } from '@/services/decks.service'

import s from '@/pages/cards/cards-page.module.scss'

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
    deleteDeck({ id: id ?? '' })
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
                {' '}
                <Typography as={'div'} className={s.dropdownMenuItem} variant={'caption'}>
                  <PlayCircleOutline className={s.icons} />
                  Learn
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
                Edit
              </Typography>
            </DropDownItem>{' '}
            <DropdownSeparator />
            <DropDownItem>
              <Typography
                as={'div'}
                className={s.dropdownMenuItem}
                onClick={() => setIsOpenDeleteModal(true)}
                variant={'caption'}
              >
                <TrashOutline className={s.icons} />
                Delete
              </Typography>
            </DropDownItem>
          </div>
        </div>
      </DropdownMenu>
      <Modal onOpenChange={setIsOpenEditeModal} open={isOpenEditeModal} title={'Edit Pack'}>
        <div className={s.contentWrapper}>
          <div className={s.contentBody}>
            <TextField onValueChange={e => setValue(e)} value={value} />
            <Checkbox checked={isChecked} onValueChange={() => setIsChecked(!isChecked)} />
          </div>
          <div className={s.buttons}>
            <Button variant={'secondary'}>Cancel</Button>
            <Button
              onClick={() => editDeck({ id: id!, isPrivate: isChecked, name: value })}
              variant={'primary'}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </Modal>
      <Modal onOpenChange={setIsOpenDeleteModal} open={isOpenDeleteModal} title={'Delete Pack'}>
        <div className={s.contentWrapper}>
          <div className={s.contentDeleteBody}>
            <Typography as={'div'}>
              Do you really want to remove <span>Pack Name</span>?
            </Typography>
            <Typography as={'div'}>All cards will be deleted.</Typography>
          </div>
          <div className={s.buttons}>
            <Button variant={'secondary'}>Cancel</Button>
            <Button onClick={onClickDelete} variant={'primary'}>
              Delete Pack
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
