import { ReactNode } from 'react'

import { ImageBlock } from '@/components/layout/modal/imageBlock'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { TextField } from '@/components/ui/textField'
import { DialogClose } from '@radix-ui/react-dialog'

import s from '@/components/ui/table/table.module.scss'

interface Props {
  buttonOnclick: () => void
  children: ReactNode
  setImageAnswer: (value: File) => void
  setImageQuestion: (value: File) => void
  setValueAnswer: (value: string) => void
  setValueQuestion: (value: string) => void
  setVideoAnswer: (value: File) => void
  setVideoQuestion: (value: File) => void
  title: string
  valueAnswer: string
  valueQuestion: string
}

export const CardModal = ({
  buttonOnclick,
  children,
  setImageAnswer,
  setImageQuestion,
  setValueAnswer,
  setValueQuestion,
  setVideoAnswer,
  setVideoQuestion,
  title,
  valueAnswer,
  valueQuestion,
}: Props) => {
  const onClick = () => {
    buttonOnclick()
  }

  return (
    <Modal title={title} trigger={children}>
      <div className={s.contentWrapper}>
        <div className={s.contentBody}>
          <TextField
            label={'Question'}
            onValueChange={e => setValueQuestion(e)}
            value={valueQuestion}
          />
          <TextField label={'Answer'} onValueChange={e => setValueAnswer(e)} value={valueAnswer} />
          <ImageBlock setFile={setImageQuestion} title={'Image Question'} />
          <ImageBlock setFile={setImageAnswer} title={'Image Answer'} />
          <ImageBlock setFile={setVideoAnswer} title={'Video Answer'} />
          <ImageBlock setFile={setVideoQuestion} title={'Video Answer'} />
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
