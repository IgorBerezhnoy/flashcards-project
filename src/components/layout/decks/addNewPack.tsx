import { useState } from 'react'
import { toast } from 'react-toastify'

import { DeckModal } from '@/components/layout/modal/deckModal'
import { Button } from '@/components/ui/button'
import { useCreateDeckMutation } from '@/services/decks/decks.service'
import { CreateDeckArgs, ErrorType } from '@/services/decks/decks.types'

export const AddNewPack = () => {
  const [createDeck, { error, isError }] = useCreateDeckMutation()
  const [value, setValue] = useState('')
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [currentImage, setCurrentImage] = useState<File | string>('')

  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message, {
      theme: 'light',
    })
  }
  const onClick = () => {
    const formData = new FormData()

    if (currentImage) {
      formData.append('cover', currentImage)
    }
    const isPrivate = isChecked.toString()

    formData.append('isPrivate', isPrivate)
    formData.append('name', value)
    createDeck(formData as unknown as CreateDeckArgs)
      .unwrap()
      .then(() => {
        toast('🦄 Created deck')
      })
  }

  return (
    <DeckModal
      buttonOnclick={onClick}
      isChecked={isChecked}
      setCurrentImage={setCurrentImage}
      setIsChecked={setIsChecked}
      setValue={setValue}
      title={'Add New Pack'}
      value={value}
    >
      <Button variant={'primary'}>Add New Pack</Button>
    </DeckModal>
  )
}
