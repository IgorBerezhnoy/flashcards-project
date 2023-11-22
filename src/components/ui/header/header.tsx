import { Logo } from '@/assets'
import { UserDropdown } from '@/components/layout/header/user-dropdown/user-dropdown'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './header.module.scss'

type HeaderType = {
  isLogin: boolean
  onClick?: () => void
  userPhoto?: string
}

export const Header = ({ isLogin, onClick, userPhoto }: HeaderType) => {
  return (
    <header className={s.header}>
      <Logo />
      {!isLogin ? (
        <Button onClick={onClick}>Sign In</Button>
      ) : (
        <div className={s.userInfo}>
          <Typography className={s.userName} variant={'h3'}>
            Ivan
          </Typography>
          <UserDropdown
            email={'ASasdas'}
            name={'Ivan'}
            photo={userPhoto}
            photoDesc={'userPhoto'}
            profilePageHref={''}
          />
        </div>
      )}
    </header>
  )
}
