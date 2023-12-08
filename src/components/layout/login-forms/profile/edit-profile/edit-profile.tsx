import { useForm } from 'react-hook-form'

import { ControlledTextField } from '@/components/controled/controlled-textField'
import { Button } from '@/components/ui/button'
import { z } from 'zod'

import s from './edit-profile.module.scss'

const schema = z.object({
  name: z.string(),
})

export type EditProfileData = z.infer<typeof schema>

type Props = {
  cancel: () => void
  onSubmit: (data: EditProfileData) => void
}

export const EditProfile = (props: Props) => {
  const { control, handleSubmit } = useForm<EditProfileData>()

  return (
    <form className={s.form} onSubmit={handleSubmit(props.onSubmit)}>
      <ControlledTextField className={s.input} control={control} label={'Nickname'} name={'name'} />
      <div className={s.buttons}>
        <Button onClick={props.cancel} variant={'secondary'}>
          Cancel
        </Button>
        <Button type={'submit'}>Save Changes</Button>
      </div>
    </form>
  )
}
