import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/modal/modal.module.scss'

export const LearnCard = () => {
  /*TODO Нужно поправить инлайн стили */
  return (
    <div style={{ width: '800px' }}>
      <div>
        <Link to={'/'}>Back to Packs List</Link>
      </div>
      <div className={s.contentLearn}>
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
      </div>
    </div>
  )
}
