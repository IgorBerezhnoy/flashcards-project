import { useRef, useState } from 'react'
import { toast } from 'react-toastify'

import { Edit2Outline } from '@/assets'
import { EditPack } from '@/components/layout/modal/editPack'
import { usePatchDeckMutation } from '@/services/decks/decks.service'
import { ErrorType } from '@/services/decks/decks.types'

import s from './../decks.module.scss'

export const EditDeckIcon = ({ id }: { id: string }) => {
  const [editDeck, { error, isError }] = usePatchDeckMutation()
  const [value, setValue] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedImage, setSelectedImage] = useState<null | string>(null)

  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message, {
      autoClose: 5000,
    })
  }

  const onClick = () => editDeck({ id, isPrivate: isChecked, name: value })

  return (
    <>
      <EditPack
        buttonOnclick={onClick}
        fileInputRef={fileInputRef}
        isChecked={isChecked}
        selectedImage={selectedImage}
        setIsChecked={setIsChecked}
        setSelectedImage={setSelectedImage}
        setValue={setValue}
        title={'Edit Pack'}
        value={value}
      >
        <Edit2Outline className={s.icon} />
      </EditPack>
    </>
  )
}
