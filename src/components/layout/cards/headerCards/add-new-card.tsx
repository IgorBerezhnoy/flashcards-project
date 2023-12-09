import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/textField'
import { useCreateCardMutation } from '@/services/cards/cards.service'
import { ErrorType } from '@/services/decks/decks.types'

import s from './../cards.module.scss'

export const AddNewCard = () => {
  const { id } = useParams()

  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [createCard, { error, isError }] = useCreateCardMutation()

  const onClick = () => {
    createCard({ answer, id: id || '', question })
      .unwrap()
      .then(() => {
        toast('🦄 Created card')
      })
  }

  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message, {
      draggable: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: 'top-right',
      progress: undefined,
      theme: 'light',
    })
  }

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
        <Button onClick={onClick} variant={'primary'}>
          Add New Card
        </Button>
      </div>
      {/*<ToastContainer />*/}
    </div>
  )
}
