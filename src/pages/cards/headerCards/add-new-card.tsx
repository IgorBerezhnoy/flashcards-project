import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/textField'
import { useCreateCardMutation } from '@/services/cards/cards.service'

import s from '@/components/ui/modal/modal.module.scss'

export const AddNewCard = () => {
  const { id } = useParams()

  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [createCard] = useCreateCardMutation()

  return (
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
        <Button onClick={() => createCard({ answer, id: id || '', question })} variant={'primary'}>
          Add New Card
        </Button>
      </div>
    </div>
  )
}
