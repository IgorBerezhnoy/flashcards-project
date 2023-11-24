import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgot-password.module.scss'

const schema = z.object({
  email: z.string().email('Invalid email address'),
})

type ForgotPasswordData = z.infer<typeof schema>

type Props = {
  onSubmit: (data: ForgotPasswordData) => void
}

export const ForgotPassword = (props: Props) => {
  const { handleSubmit, register } = useForm<ForgotPasswordData>({ resolver: zodResolver(schema) })

  return (
    <Card className={s.container}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Forgot your password?
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(props.onSubmit)}>
        <TextField label={'Email'} placeholder={'email'} {...register('email')} />
        <Typography className={s.infoText} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button>Send Instructions</Button>
      </form>
      <div className={s.footer}>
        <Typography as={'a'} className={s.text}>
          {'Did you remember your password?'}
        </Typography>
        <Typography as={'a'} className={s.link} variant={'link1'}>
          Try logging in
        </Typography>
      </div>
    </Card>
  )
}
