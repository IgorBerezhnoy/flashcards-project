import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { BackToPacksList } from '@/components/layout/backToPack'
import { CurrentCard } from '@/components/layout/learnCard/currentCard'
import { Linear } from '@/components/ui'
import { useActions } from '@/hooks'
import { currentCardActions } from '@/services/cards/card.slice'
import { useLearnCardsQuery } from '@/services/decks/decks.service'
import { ErrorType } from '@/services/decks/decks.types'

import s from './learnCard-page.module.scss'

export const LearnCardPage = () => {
  const { id } = useParams()
  const { setCurrentCard } = useActions(currentCardActions)

  const { data, error, isError, isLoading } = useLearnCardsQuery(id ?? '')

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
    return <Linear />
  }
  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message)
  }

  return (
    <div className={s.learnCard}>
      <div className={`${s.learnCard__box} learnCard__box`}>
        <div>
          <BackToPacksList />
        </div>
        {isError ? (
          <h1 className={s.headerError}>There are no cards in the deck.</h1>
        ) : (
          <CurrentCard id={data?.id ?? ''} />
        )}
      </div>
    </div>
  )
}
