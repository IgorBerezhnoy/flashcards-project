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
    <div className={s.header}>
      <div className={`${s.header__box} header__box`}>
        <Logo className={s.header__logo} />
        {!isLogin ? (
          <Button className={s.header__btn} onClick={onClick}>Sign In</Button>
        ) : (
          <div className={s.header__userInfo}>
            <Typography className={s.header__userName} variant={'h3'}>
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
      </div>
    </div>
  )
}
