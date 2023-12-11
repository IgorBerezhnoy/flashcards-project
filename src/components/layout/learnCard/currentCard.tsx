import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Buttons } from '@/components/layout/learnCard/buttons'
import { QuestionBody } from '@/components/layout/learnCard/questionBody'
import { ShowAnswer } from '@/components/layout/learnCard/showAnswer'
import { Card, Loader } from '@/components/ui'
import { useActions } from '@/hooks'
import { CurrentCardStateType, currentCardActions } from '@/services/cards/card.slice'
import { useLearnCardsQuery } from '@/services/decks/decks.service'
import { ErrorType } from '@/services/decks/decks.types'
import { RootState } from '@/services/store'

import s from '@/pages/learnCard-page/learnCard-page.module.scss'

export const CurrentCard = () => {
  const { id } = useParams()
  const { setCurrentCard } = useActions(currentCardActions)
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const { data, error, isError, isLoading } = useLearnCardsQuery(id ?? '')
  const { currentCard } = useSelector<RootState, CurrentCardStateType>(state => state.currentCard)

  useEffect(() => {
    console.log(1)
    if (data) {
      setCurrentCard({
        currentCard: {
          answer: {
            img: data?.answerImg,
            text: data?.answer,
          },
          question: {
            img: data?.questionImg,
            text: data?.question,
          },
          shots: data?.shots,
        },
      })
    }
  }, [data])
  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message, {
      theme: 'light',
    })
  }

  return (
    <Card className={s.contentLearn}>
      <QuestionBody currentCard={currentCard} />
      {showAnswer && (
        <ShowAnswer
          cardId={data?.id ?? ''}
          currentCard={currentCard}
          setShowAnswer={setShowAnswer}
        />
      )}
      <Buttons setShowAnswer={setShowAnswer} showAnswer={showAnswer} />
    </Card>
  )
}
