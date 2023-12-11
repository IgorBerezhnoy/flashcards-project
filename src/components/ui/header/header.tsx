import { Link } from 'react-router-dom'

import { Logo } from '@/assets'
import { UserDropdown } from '@/components/layout/user-dropdown/user-dropdown'
import { Button } from '@/components/ui/button'

import s from './header.module.scss'

type HeaderType = {
  email?: string
  isLogin: boolean
  name?: string
  onClick?: () => void
  userPhoto?: string
}

export const Header = ({ email, isLogin, name, onClick, userPhoto }: HeaderType) => {
  return (
    <div className={s.header}>
      <div className={`${s.header__box} header__box`}>
        <Link to={'/'}>
          <Logo className={s.header__logo} />
        </Link>
        {!isLogin ? (
          <Button className={s.header__btn} onClick={onClick}>
            Sign In
          </Button>
        ) : (
          <div className={s.header__userInfo}>
            <UserDropdown
              email={email || 'NoEmail'}
              name={name || 'NoName'}
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
