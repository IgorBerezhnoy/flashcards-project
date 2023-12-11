import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Buttons } from '@/components/layout/learnCard/buttons'
import { QuestionBody } from '@/components/layout/learnCard/questionBody'
import { ShowAnswer } from '@/components/layout/learnCard/showAnswer'
import { Card } from '@/components/ui'
import { CurrentCardStateType } from '@/services/cards/card.slice'
import { RootState } from '@/services/store'

import s from '@/pages/learnCard-page/learnCard-page.module.scss'

export const CurrentCard = ({ id }: { id: string }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const { currentCard } = useSelector<RootState, CurrentCardStateType>(state => state.currentCard)

  return (
    <Card className={s.contentLearn}>
      <QuestionBody currentCard={currentCard} />
      {showAnswer && (
        <ShowAnswer cardId={id} currentCard={currentCard} setShowAnswer={setShowAnswer} />
      )}
      <Buttons setShowAnswer={setShowAnswer} showAnswer={showAnswer} />
    </Card>
  )
}
