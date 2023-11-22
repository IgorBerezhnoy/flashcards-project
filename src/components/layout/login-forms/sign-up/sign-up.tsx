import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-up.module.scss'

const schema = z.object({
  confirmPassword: z.string().min(3),
  email: z.string().email('Invalid email address'),
  password: z.string().min(3),
})

type SignUpData = z.infer<typeof schema>
type Props = {
  onSubmit: (data: SignUpData) => void
}

export const SignUp = (props: Props) => {
  const { handleSubmit, register } = useForm<SignUpData>({
    resolver: zodResolver(schema),
  })

  return (
    <Card className={s.container}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Sign up
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(props.onSubmit)}>
        <TextField label={'Email'} placeholder={'email'} {...register('email')} />
        <TextField
          label={'Password'}
          placeholder={'password'}
          {...register('password')}
          type={'password'}
        />
        <TextField
          label={'Confirm Password'}
          placeholder={'Confirm password'}
          {...register('confirmPassword')}
          type={'password'}
        />
        <Button>Sign Up</Button>
      </form>
      <div className={s.footer}>
        <Typography as={'a'} className={s.text}>
          {'Already have an account?'}
        </Typography>
        <Typography as={'a'} className={s.signIn} variant={'link1'}>
          Sign in
        </Typography>
      </div>
    </Card>
  )
}
