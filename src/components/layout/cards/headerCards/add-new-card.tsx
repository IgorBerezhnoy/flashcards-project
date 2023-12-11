import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CardModal } from '@/components/layout/modal/cardModal'
import { Button } from '@/components/ui/button'
import { useCreateCardMutation } from '@/services/cards/cards.service'
import { CreateCard } from '@/services/cards/cards.types'
import { ErrorType } from '@/services/decks/decks.types'

export const AddNewCard = () => {
  const { id } = useParams()

  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [createCard, { error, isError }] = useCreateCardMutation()

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

    createCard({ formData, id } as unknown as CreateCard)
      .unwrap()
      .then(() => {
        toast('🦄 Created card')
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
      <Button>Add New Card</Button>
    </CardModal>
  )
}
