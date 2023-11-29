import { useState } from 'react'

import { Edit2Outline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal/modal'
import { TextField } from '@/components/ui/textField'

import s from '@/components/ui/table/table.module.scss'

export const EditDeckIcon = ({ id }: { id: string }) => {
  // TODO компонента в работе
  // const [editDeck, { isLoading }] = usePatchDeckMutation()
  const [value, setValue] = useState('')
  const [message, setMessage] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Modal title={'Edit Pack'} trigger={<Edit2Outline className={s.icon} />}>
      <div className={s.contentWrapper}>
        <div className={s.contentBody}>
          <TextField onValueChange={e => setValue(e)} value={value} />
          <Checkbox checked={isChecked} onValueChange={() => setIsChecked(!isChecked)} />
          {message}
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button
            // onClick={() => editDeck({ id, isPrivate: isChecked, name: value })}
            onClick={() => setMessage('Я не работаю ')}
            variant={'primary'}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </Modal>
  )
}
