import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { Logo } from '@/icons/logo'

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
          <Typography variant={'h3'}>Ivan</Typography>
          <img alt={'UserPhoto'} className={s.userInfo_img} src={userPhoto} />
        </div>
      )}
    </header>
  )
}
