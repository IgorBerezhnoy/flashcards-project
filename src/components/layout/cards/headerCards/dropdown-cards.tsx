import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Edit2Outline, MoreVerticalOutline, PlayCircleOutline, TrashOutline } from '@/assets'
import { DeckModal } from '@/components/layout/modal/deckModal'
import { Button } from '@/components/ui/button'
import { DropDownItem, DropdownMenu, DropdownSeparator } from '@/components/ui/dropdownMenu'
import { Modal } from '@/components/ui/modal/modal'
import { DialogClose } from '@/components/ui/modal/modalClose'
import { Typography } from '@/components/ui/typography'
import { useDeleteDeckMutation, usePatchDeckMutation } from '@/services/decks/decks.service'
import { ErrorType, PatchDeckByIdArg } from '@/services/decks/decks.types'

import s1 from '../../../ui/table/table.module.scss'
import s from './../cards.module.scss'

export const DropdownCards = () => {
  const { id } = useParams()
  const [currentImage, setCurrentImage] = useState<File | string>('')

  const [editDeck, { error, isError }] = usePatchDeckMutation()

  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message, {
      autoClose: 5000,
    })
  }
  const onClick = async () => {
    const formData = new FormData()

    if (currentImage) {
      formData.append('cover', currentImage)
    }
    if (value) {
      formData.append('name', value)
    }
    const isPrivate = isChecked.toString()

    formData.append('isPrivate', isPrivate)

    editDeck({ formData, id } as unknown as PatchDeckByIdArg)
  }
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
      <DeckModal
        buttonOnclick={onClick}
        isChecked={isChecked}
        onOpenChange={setIsOpenEditeModal}
        open={isOpenEditeModal}
        setCurrentImage={setCurrentImage}
        setIsChecked={setIsChecked}
        setValue={setValue}
        title={'Edit Pack'}
        value={value}
      />

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
