import { useState } from 'react'

import { Edit2Outline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal/modal'
import { TextField } from '@/components/ui/textField'
import { usePatchDeckMutation } from '@/services/decks/decks.service'

import s from '@/components/ui/table/table.module.scss'

export const EditDeckIcon = ({ id }: { id: string }) => {
  const [editDeck] = usePatchDeckMutation()
  const [value, setValue] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Modal title={'Edit Pack'} trigger={<Edit2Outline className={s.icon} />}>
      <div className={s.contentWrapper}>
        <div className={s.contentBody}>
          <TextField onValueChange={e => setValue(e)} value={value} />
          <Checkbox checked={isChecked} onValueChange={() => setIsChecked(!isChecked)} />
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button
            onClick={() => editDeck({ id, isPrivate: isChecked, name: value })}
            variant={'primary'}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </Modal>
  )
}
