import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './new-passwors.module.scss'

const schema = z.object({
  password: z.string().min(3),
})

type NewPasswordData = z.infer<typeof schema>

type Props = {
  onSubmit: (data: NewPasswordData) => void
}

export const NewPassword = (props: Props) => {
  const { handleSubmit, register } = useForm<NewPasswordData>({ resolver: zodResolver(schema) })

  return (
    <Card className={s.container}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Create new password
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(props.onSubmit)}>
        <TextField
          label={'Password'}
          placeholder={'New password'}
          type={'password'}
          {...register('password')}
        />
        <Typography className={s.infoText} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button>Create New Password</Button>
      </form>
    </Card>
  )
}
