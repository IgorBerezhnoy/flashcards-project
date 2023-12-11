import { useState } from 'react'
import { toast } from 'react-toastify'

import { Edit2Outline } from '@/assets'
import { CardModal } from '@/components/layout/modal/cardModal'
import { usePatchCardMutation } from '@/services/cards/cards.service'
import { PatchCard } from '@/services/cards/cards.types'
import { ErrorType } from '@/services/decks/decks.types'

import s from '@/components/layout/cards/cards.module.scss'

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

  const [imageAnswer, setImageAnswer] = useState<File | string>('')
  const [imageQuestion, setImageQuestion] = useState<File | string>('')
  const [videoAnswer, setVideoAnswer] = useState<File | string>('')
  const [videoQuestion, setVideoQuestion] = useState<File | string>('')

  const onClick = () => {
    const formData = new FormData()

    if (imageAnswer) {
      formData.append('answerImg', imageAnswer)
    }
    if (imageQuestion) {
      formData.append('questionImg', imageQuestion)
    }
    if (videoQuestion) {
      formData.append('questionVideo', videoQuestion)
    }
    if (videoAnswer) {
      formData.append('answerVideo', videoAnswer)
    }
    formData.append('answer', answer)
    formData.append('question', question)

    patchCard({ deckId, formData, id } as unknown as PatchCard)
      .unwrap()
      .then(() => {
        toast('🦄 Edit card')
      })
  }

  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message)
  }

  return (
    <CardModal
      buttonOnclick={onClick}
      setImageAnswer={setImageAnswer}
      setImageQuestion={setImageQuestion}
      setValueAnswer={setAnswer}
      setValueQuestion={setQuestion}
      setVideoAnswer={setVideoAnswer}
      setVideoQuestion={setVideoQuestion}
      title={'Add New Card'}
      valueAnswer={answer}
      valueQuestion={question}
    >
      <Edit2Outline className={`${s.icon} ${className}`} />
    </CardModal>
  )
}
