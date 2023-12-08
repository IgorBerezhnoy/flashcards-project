import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { TextField } from '@/components/ui/textField'
import { ImageBlock } from '@/pages/modal/imageBlock'
import { DialogClose } from '@radix-ui/react-dialog'

import s from '@/components/ui/table/table.module.scss'

export const AddNewCard = () => {
  const [valueQuestion, setValueQuestion] = useState('')
  const [valueAnswer, setValueAnswer] = useState('')

  const onClick = () => {}

  return (
    <Modal title={'Add New Card'} trigger={<Button variant={'primary'}>Add New Card</Button>}>
      <div className={s.contentWrapper}>
        <div className={s.contentBody}>
          <TextField
            label={'Question'}
            onValueChange={e => setValueQuestion(e)}
            value={valueQuestion}
          />
          <TextField label={'Answer'} onValueChange={e => setValueAnswer(e)} value={valueAnswer} />
          <ImageBlock title={'Image Question'} />
          <ImageBlock title={'Image Answer'} />
          <ImageBlock title={'Video Answer'} />
          <ImageBlock title={'Video Answer'} />
          <DialogClose>
            <div className={s.buttons}>
              <Button variant={'secondary'}>Cancel</Button>
              <Button onClick={onClick} variant={'primary'}>
                Add New Card
              </Button>
            </div>
          </DialogClose>
        </div>
      </div>
    </Modal>
  )
}
