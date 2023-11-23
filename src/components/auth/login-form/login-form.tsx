import { useForm } from 'react-hook-form'

import { ControlledCheckbox } from '@/components/controled/controlled-checkbox/controlled-checkbox'
import { ControlledRadioGroup } from '@/components/controled/controlled-radioGroup'
import { ControlledTextField } from '@/components/controled/controlled-textField'
import { Button } from '@/components/ui/button'
import { RadioType } from '@/components/ui/radio'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const radioData: RadioType[] = [
  { id: '1', label: 'RadioGroup1', value: 'RadioGroup1' },
  {
    id: '2',
    label: 'RadioGroup2',
    value: 'RadioGroup2',
  },
  { id: '3', label: 'RadioGroup3', value: 'RadioGroup3' },
]

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(3, 'Too short password'),
  radioGroup: z.any(),
  rememberMe: z.boolean().optional(),
})

//
type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  console.log(control)
  const onSubmit = (data: FormValues) => console.log(data)

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField control={control} label={'email'} name={'email'} />
        <ControlledTextField control={control} label={'password'} name={'password'} />
        <ControlledCheckbox control={control} label={'remember me'} name={'rememberMe'} />
        <Button type={'submit'}>Submit</Button>
        <ControlledRadioGroup control={control} name={'radioGroup'} radioGroup={radioData} />
      </form>
    </>
  )
}
