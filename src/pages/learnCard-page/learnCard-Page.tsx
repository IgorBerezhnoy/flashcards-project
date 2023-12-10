import { BackToPacksList } from '@/components/layout/backToPack'
import { CurrentCard } from '@/components/layout/learnCard/currentCard'

import s from './learnCard-page.module.scss'

export const LearnCardPage = () => {
  return (
    <div className={s.learnCard}>
      <div className={`${s.learnCard__box} learnCard__box`}>
        <div>
          <BackToPacksList />
        </div>
        <CurrentCard />
      </div>
    </div>
  )
}
