import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { ControlledCheckbox } from '@/components/controled/controlled-checkbox'
import { ControlledTextField } from '@/components/controled/controlled-textField'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './sign-in.module.scss'

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})

type SignInData = z.infer<typeof schema>

type Props = {
  onSubmit: (data: SignInData) => void
}

export const SignIn = (props: Props) => {
  const onSubmit = (data: SignInData) => {
    props.onSubmit(data)
  }

  const { control, handleSubmit } = useForm<SignInData>({
    resolver: zodResolver(schema),
  })

  return (
    <Card className={s.container}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Sign in
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          control={control}
          label={'Email'}
          name={'email'}
          placeholder={'email'}
        />
        <ControlledTextField
          control={control}
          label={'Password'}
          name={'password'}
          placeholder={'password'}
          type={'password'}
        />
        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={'Remember me'}
          name={'rememberMe'}
        />
        <Typography as={'a'} className={s.forgotPassword} variant={'body2'}>
          Forgot Password?
        </Typography>
        <Button>Sign In</Button>
      </form>
      <div className={s.footer}>
        <Typography as={'a'} className={s.text}>
          {"Don't have an account?"}
        </Typography>
        <Typography as={'a'} className={s.signUp} variant={'link1'}>
          <Link to={'/sing-up'}>Sign Up</Link>
        </Typography>
      </div>
    </Card>
  )
}
