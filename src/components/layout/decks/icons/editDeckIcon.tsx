import { useState } from 'react'
import { toast } from 'react-toastify'

import { Edit2Outline } from '@/assets'
import { DeckModal } from '@/components/layout/modal/deckModal'
import { usePatchDeckMutation } from '@/services/decks/decks.service'
import { ErrorType, PatchDeckByIdArg } from '@/services/decks/decks.types'

import s from './../decks.module.scss'

export const EditDeckIcon = ({ id, name }: { id: string; name: string }) => {
  const [editDeck, { error, isError }] = usePatchDeckMutation()
  const [value, setValue] = useState(name)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [currentImage, setCurrentImage] = useState<File | string>('')

  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message)
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

  return (
    <DeckModal
      buttonOnclick={onClick}
      isChecked={isChecked}
      setCurrentImage={setCurrentImage}
      setIsChecked={setIsChecked}
      setValue={setValue}
      title={'Edit Pack'}
      value={value}
    >
      <Edit2Outline className={s.icon} />
    </DeckModal>
  )
}
