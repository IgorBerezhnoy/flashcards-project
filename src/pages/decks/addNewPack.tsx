import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal/modal'
import { TextField } from '@/components/ui/textField'
import { useCreateDeckMutation } from '@/services/decks.service'

import s from '@/components/ui/table/table.module.scss'

export const AddNewPack = () => {
  const [createDeck] = useCreateDeckMutation()
  const [value, setValue] = useState('')

  return (
    <Modal title={'Add New Pack'} trigger={<Button variant={'primary'}>Add New Pack</Button>}>
      <div className={s.contentWrapper}>
        <div className={s.contentBody}>
          <TextField onValueChange={e => setValue(e)} value={value} />
          <Checkbox label={'Private pack'} />
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button onClick={() => createDeck({ name: value })} variant={'primary'}>
            Add New Pack
          </Button>
        </div>
      </div>
    </Modal>
  )
}
