import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal/modal'
import { TextField } from '@/components/ui/textField'
import { useCreateDeckMutation } from '@/services/decks/decks.service'

import s from './decks.module.scss'

export const AddNewPack = () => {
  const [createDeck, {}] = useCreateDeckMutation()
  const [value, setValue] = useState('')

  const onClick = () => {
    createDeck({ name: value })
      .unwrap()
      .then(() => {
        toast('🦄 Created card')
      })
  }

  return (
    <Modal title={'Add New Pack'} trigger={<Button variant={'primary'}>Add New Pack</Button>}>
      <div className={s.contentWrapper}>
        <div className={s.contentBody}>
          <TextField onValueChange={e => setValue(e)} value={value} />
          <Checkbox label={'Private pack'} />
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button onClick={onClick} variant={'primary'}>
            Add New Pack
          </Button>
        </div>
      </div>
    </Modal>
  )
}