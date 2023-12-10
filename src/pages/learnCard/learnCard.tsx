import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ControlledRadioGroup } from '@/components/controled/controlled-radioGroup'
import { BackToPacksList } from '@/components/layout/backToPack'
import { Loader } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useActions } from '@/hooks'
import { CurrentCardType, currentCardActions } from '@/services/decks/card.slice'
import { useLearnCardsQuery, useSendAnswerMutation } from '@/services/decks/decks.service'
import { ErrorType } from '@/services/decks/decks.types'
import { RootState } from '@/services/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './learnCard .module.scss'

const schema = z.object({
  grade: z.string().email('Invalid email address'),
})

type SignInData = z.infer<typeof schema>

export const LearnCard = () => {
  const { id } = useParams()
  const { setCurrentCard } = useActions(currentCardActions)
  const [showAnswer, setShowAnswer] = useState<boolean>(false)
  const { data, error, isError, isLoading } = useLearnCardsQuery(id ?? '')
  const [sendAnswer, { data: nextData }] = useSendAnswerMutation()
  const { currentCard } = useSelector<RootState, CurrentCardType>(state => state.currentCard)
  const { control, getValues } = useForm<SignInData>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
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
      },
    })
  }, [])
  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message, {
      theme: 'light',
    })
  }

  const onClickNextQuestion = async () => {
    setShowAnswer(false)
    await sendAnswer({ cardId: data?.id ?? '', grade: +getValues().grade })
    setCurrentCard({
      currentCard: {
        answer: {
          img: nextData?.answerImg,
          text: nextData?.answer,
        },
        question: {
          img: nextData?.questionImg,
          text: nextData?.question,
        },
      },
    })
  }

  return (
    <div className={s.learnCard}>
      <div className={`${s.learnCard__box} learnCard__box`}>
        <div>
          <BackToPacksList />
        </div>
        <Card className={s.contentLearn}>
          <Typography className={s.contentLearnTitle}>Learn “Pack Name”</Typography>
          <div className={s.contentLearnBody}>
            <Typography className={s.contentLearnTextOne}>
              <span>Question</span>:{' '}
              <div className={s.questionAndImg}>
                <span>
                  {currentCard.question.text !== 'undefined'
                    ? currentCard.question.text
                    : 'no question'}
                </span>
                {currentCard.question.img && (
                  <div>
                    <img
                      alt={'picture of this question'}
                      className={s.imgQuestion}
                      src={currentCard.question.img}
                    />
                  </div>
                )}
              </div>
            </Typography>
            <Typography className={s.contentLearnTextTwo}>
              Количество попыток ответов на вопрос: <span>10</span>
            </Typography>
          </div>
          {showAnswer && (
            <div>
              <Typography className={s.contentLearnTextOne}>
                <span>Answer:</span>{' '}
                <div className={s.questionAndImg}>
                  <span>
                    {currentCard.answer.text !== 'undefined'
                      ? currentCard.answer.text
                      : 'no answer'}
                  </span>
                  {currentCard.answer.img && (
                    <div>
                      <img
                        alt={'picture of this question'}
                        className={s.imgQuestion}
                        src={currentCard.answer.img}
                      />
                    </div>
                  )}
                </div>
              </Typography>
              <Typography className={s.contentLearnSybText}></Typography>
              <div className={s.radioButtonModule}>
                <Typography className={s.radioButtonTitle}>Rate yourself:</Typography>
                <ControlledRadioGroup
                  control={control}
                  defaultValue={'1'}
                  name={'grade'}
                  radioGroup={[
                    { id: '1', label: 'Did not know', value: '1' },
                    { id: '2', label: 'Forgot', value: '2' },
                    { id: '3', label: 'A lot of thought', value: '3' },
                    { id: '4', label: 'Сonfused', value: '4' },
                    { id: '5', label: 'Knew the answer', value: '5' },
                  ]}
                />
              </div>
              <Button fullWidth onClick={onClickNextQuestion} variant={'primary'}>
                Next Question
              </Button>
            </div>
          )}
          {!showAnswer && (
            <Button fullWidth onClick={() => setShowAnswer(true)} variant={'primary'}>
              Show Answer
            </Button>
          )}
          <NavLink to={'/'}>
            <Button fullWidth variant={'secondary'}>
              End study session
            </Button>
          </NavLink>
        </Card>
      </div>
    </div>
  )
}
