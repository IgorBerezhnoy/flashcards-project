import { CheckEmail } from '@/assets'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from '../check-email.module.scss'

type Props = {
  email: string
}

export const CheckEmailFormSB = ({ email }: Props) => {
  return (
    <Card className={s.container}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Check Email
      </Typography>
      <div className={s.content}>
        <CheckEmail />
        <Typography className={s.infoText} variant={'body2'}>
          {`We’ve sent an Email with instructions to ${email}`}
        </Typography>
      </div>

      <div className={s.footer}>
        <Button fullWidth>Back to Sign In</Button>
      </div>
    </Card>
  )
}
