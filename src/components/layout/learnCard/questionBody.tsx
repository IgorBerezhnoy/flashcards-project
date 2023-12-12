import { Typography } from '@/components/ui/typography'
import { CurrentCardStateType } from '@/services/cards/card.slice'

import s from '@/pages/learnCard-page/learnCard-page.module.scss'

export const QuestionBody = ({ currentCard }: CurrentCardStateType) => {
  return (
    <>
      <Typography className={s.contentLearnTitle}>Learn “Pack Name”</Typography>
      <div className={s.contentLearnBody}>
        <Typography className={s.contentLearnTextOne}>
          <div className={s.contentQuestion}>Question:</div>
          <div className={s.questionAndImg}>
            <span>
              {currentCard.question.text?.trim() === 'undefined'
                ? 'no question'
                : currentCard.question.text}
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
          Number of attempts to answer the question: <span>{currentCard.shots?.toString()}</span>
        </Typography>
      </div>
    </>
  )
}
