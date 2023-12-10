import { useState } from 'react'
import { toast } from 'react-toastify'

import { Edit2Outline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/textField'
import { usePatchCardMutation } from '@/services/cards/cards.service'
import { ErrorType } from '@/services/decks/decks.types'

import s from './../cards.module.scss'

export const EditCardIcon = ({
  className,
  deckId,
  id,
}: {
  className: string
  deckId: string
  id: string
}) => {
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [patchCard, { error, isError }] = usePatchCardMutation()

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
    <Modal title={'Edit Card'} trigger={<Edit2Outline className={`${s.icon} ${className}`} />}>
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
