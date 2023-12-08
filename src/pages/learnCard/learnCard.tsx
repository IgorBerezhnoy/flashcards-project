import { BackToPacksList } from '@/components/layout/backToPack'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Page } from '@/components/ui/page'
import { Typography } from '@/components/ui/typography'
import { useMeQuery } from '@/services/auth/auth.service'

import s from './learnCard .module.scss'

export const LearnCard = () => {
  return (
    <Page>
      <div className={s.learnCard}>
        <div className={`${s.learnCard__box} learnCard__box`}>
          <div>
            <BackToPacksList />
          </div>
          <Card className={s.contentLearn}>
            <Typography className={s.contentLearnTitle}>Learn “Pack Name”</Typography>
            <div className={s.contentLearnBody}>
              <Typography className={s.contentLearnTextOne}>
                <span>Question</span>: How &quot;This&quot; works in JavaScript?
              </Typography>
              <Typography className={s.contentLearnTextTwo}>
                Количество попыток ответов на вопрос: <span>10</span>
              </Typography>
            </div>
            <Button fullWidth variant={'primary'}>
              Show Answer
            </Button>
          </Card>
        </div>
      </div>
    </Page>
  )
}
