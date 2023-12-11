import { useForm } from 'react-hook-form'

import { ControlledRadioGroup } from '@/components/controled/controlled-radioGroup'
import { Button } from '@/components/ui'
import { Typography } from '@/components/ui/typography'
import { useActions } from '@/hooks'
import { CurrentType, currentCardActions } from '@/services/cards/card.slice'
import { useSendAnswerMutation } from '@/services/decks/decks.service'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '@/pages/learnCard-page/learnCard-page.module.scss'

type Props = {
  cardId: string
  currentCard: CurrentType
  setShowAnswer: (value: boolean) => void
}

const schema = z.object({
  grade: z.any(),
})

type SignInData = z.infer<typeof schema>

export const ShowAnswer = ({ cardId, currentCard, setShowAnswer }: Props) => {
  const { control, getValues, setValue } = useForm<SignInData>({
    resolver: zodResolver(schema),
  })
  const [sendAnswer] = useSendAnswerMutation()
  const { setCurrentCard } = useActions(currentCardActions)

  const onClickNextQuestion = async () => {
    setShowAnswer(false)
    const response: any = await sendAnswer({ cardId, grade: +getValues().grade || 1 })

    setValue('grade', 1)

    if (response) {
      setCurrentCard({
        currentCard: {
          answer: {
            img: response?.data?.answerImg,
            text: response?.data?.answer,
          },
          question: {
            img: response?.data?.questionImg,
            text: response?.data?.question,
          },
          shots: response?.data?.shots,
        },
      })
    }
  }

  return (
    <>
      <div>
        <Typography className={s.contentLearnTextOne}>
          <span>Answer:</span>{' '}
          <div className={s.questionAndImg}>
            <span>
              {currentCard.answer.text !== 'undefined' || currentCard.answer.text.trim() !== ''
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
    </>
  )
}
