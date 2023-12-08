import { Edit2Outline, LogOut } from '@/assets'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { useLogoutMutation } from '@/services/auth/auth.service'

import s from './info-profile.module.scss'

type Props = {
  email: string
  name: string
  onEditProfile: () => void
}

export const InfoProfile = ({ email, name, onEditProfile }: Props) => {
  const [logout] = useLogoutMutation()

  return (
    <div className={s.wrapper}>
      <div className={s.nameBlock} onClick={onEditProfile}>
        <div className={s.iconAndName}>
          <Typography as={'h2'} className={s.text} variant={'h2'}>
            {name}
          </Typography>
          <Edit2Outline className={s.icon} />
        </div>
      </div>
      <Typography className={s.email} variant={'body2'}>
        {email}
      </Typography>
      <Button onClick={() => logout()} variant={'secondary'}>
        <LogOut />
        Logout
      </Button>
    </div>
  )
}
