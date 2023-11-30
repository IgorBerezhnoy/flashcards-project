import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/controled/controlled-textField'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
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
  const { control, handleSubmit } = useForm<SignUpData>({
    resolver: zodResolver(schema),
  })

  return (
    <Card className={s.container}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Sign up
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(props.onSubmit)}>
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
        <ControlledTextField
          control={control}
          label={'Confirm Password'}
          name={'confirmPassword'}
          placeholder={'Confirm password'}
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
