import { useController, useForm } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/textField'

import { Button } from '../../ui/button'

type FormValues = {
  email: string
  password: string
  rememberMe?: boolean
}

export const LoginForm = () => {
  const { control, handleSubmit, register } = useForm<FormValues>()

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('email')} label={'email'} />
      <TextField {...register('password')} label={'password'} />
      <Checkbox checked={value} label={'remember me'} onCheckedChange={onChange} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
