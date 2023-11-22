import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/textField'
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

export const SignIn = () => {
  const onSubmit = (data: SignInData) => {
    console.log(data)
  }

  const { control, handleSubmit, register } = useForm<SignInData>({
    resolver: zodResolver(schema),
  })
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <Card className={s.container}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Sign in
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField label={'Email'} {...register('email')} placeholder={'email'} />
        <TextField
          label={'Password'}
          {...register('password')}
          placeholder={'password'}
          type={'password'}
        />
        <Checkbox
          checked={value}
          className={s.checkbox}
          label={'Remember me'}
          onChange={onChange}
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
          Sign Up
        </Typography>
      </div>
    </Card>
  )
}
