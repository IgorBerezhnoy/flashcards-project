import { useState } from 'react'

import { Edit2Outline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/textField'
import { usePatchCardMutation } from '@/services/cards/cards.service'

import s from './../cards.module.scss'

export const EditCardIcon = ({ deckId, id }: { deckId: string; id: string }) => {
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [patchCard] = usePatchCardMutation()

  return (
    <Modal title={'Edit Card'} trigger={<Edit2Outline />}>
      <div className={s.contentWrapper}>
        <div className={s.contentBody}>
          <Select label={'Choose a question format'} placeholder={'Text'} />
          <TextField
            label={'Question'}
            onValueChange={setQuestion}
            placeholder={'How "This" works in JavaScript?'}
            value={question}
          />
          <TextField
            label={'Answer'}
            onValueChange={setAnswer}
            placeholder={'This is how "This" works in JavaScript'}
            type={'default'}
            value={answer}
          />
        </div>
        <div className={s.buttons}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button onClick={() => patchCard({ answer, deckId, id, question })} variant={'primary'}>
            Add New Card
          </Button>
        </div>
      </div>
    </Modal>
  )
}
