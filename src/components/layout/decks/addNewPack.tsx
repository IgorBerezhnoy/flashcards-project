import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal/modal'
import { DialogClose } from '@/components/ui/modal/modalClose'
import { TextField } from '@/components/ui/textField'
import { useCreateDeckMutation } from '@/services/decks/decks.service'
import { ErrorType } from '@/services/decks/decks.types'

import s from '@/components/ui/table/table.module.scss'

export const AddNewPack = () => {
  const [createDeck, { error, isError }] = useCreateDeckMutation()
  const [value, setValue] = useState('')

  const onClick = () => {
    createDeck({ name: value })
      .unwrap()
      .then(() => {
        toast('🦄 Created deck')
      })
  }

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
    <Modal title={'Add New Pack'} trigger={<Button variant={'primary'}>Add New Pack</Button>}>
      <div className={s.contentWrapper}>
        <div className={s.contentBody}>
          <TextField onValueChange={e => setValue(e)} value={value} />
          <Checkbox label={'Private pack'} />
        </div>
        <DialogClose>
          <div className={s.buttons}>
            <Button variant={'secondary'}>Cancel</Button>
            <Button onClick={onClick} variant={'primary'}>
              Add New Pack
            </Button>
          </div>
        </DialogClose>
      </div>
    </Modal>
  )
}
