import { useState } from 'react'
import { toast } from 'react-toastify'

import { Edit2Outline } from '@/assets'
import { CardModal } from '@/components/layout/modal/cardModal'
import { usePatchCardMutation } from '@/services/cards/cards.service'
import { ErrorEditCardType, PatchCard } from '@/services/cards/cards.types'

import s from '@/components/layout/cards/cards.module.scss'

export const EditCardIcon = ({
  className,
  currentAnswer,
  currentQuestion,
  deckId,
  id,
}: {
  className: string
  currentAnswer: string
  currentQuestion: string
  deckId: string
  id: string
}) => {
  const [question, setQuestion] = useState<string>(currentQuestion)
  const [answer, setAnswer] = useState<string>(currentAnswer)
  const [patchCard] = usePatchCardMutation()

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
    if (answer) {
      formData.append('answer', answer)
    }
    if (question) {
      formData.append('question', question)
    }

    patchCard({ deckId, formData, id } as unknown as PatchCard)
      .unwrap()
      .then(() => {
        toast('🦄 Edit card')
      })
      .catch((e: { data: ErrorEditCardType }) => {
        toast.error(e.data.errorMessages[0].message)
      })
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
