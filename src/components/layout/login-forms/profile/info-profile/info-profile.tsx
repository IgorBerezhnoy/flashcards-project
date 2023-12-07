import { Edit2Outline, LogOut } from '@/assets'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './info-profile.module.scss'

type Props = {
  email: string
  name: string
  onEditProfile: () => void
}

export const InfoProfile = ({ email, name, onEditProfile }: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.nameBlock} onClick={onEditProfile}>
        <div className={s.iconAndName}>
          <Typography as={'h2'} variant={'h2'}>
            {name}
          </Typography>
          <Edit2Outline />
        </div>
      </div>
      <Typography className={s.email} variant={'body2'}>
        {email}
      </Typography>
      <Button variant={'secondary'}>
        <LogOut />
        Logout
      </Button>
    </div>
  )
}
