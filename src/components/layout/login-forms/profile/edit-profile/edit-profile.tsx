import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { z } from 'zod'

import s from './edit-profile.module.scss'

const schema = z.object({
  name: z.string(),
})

export type EditProfileData = z.infer<typeof schema>

type Props = {
  onSubmit: (data: EditProfileData) => void
}

export const EditProfile = (props: Props) => {
  const { handleSubmit, register } = useForm<EditProfileData>()

  return (
    <form className={s.form} onSubmit={handleSubmit(props.onSubmit)}>
      <TextField className={s.input} label={'Nickname'} {...register('name')} />
      <Button fullWidth type={'submit'}>
        Save Changes
      </Button>
    </form>
  )
}
