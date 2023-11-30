import { Link } from 'react-router-dom'

import { LogOut, PersonOutline } from '@/assets'
import { DropDownItem } from '@/components/ui/dropdownMenu/dropDownItem'
import { DropdownMenu } from '@/components/ui/dropdownMenu/dropdownMenu'
import { DropdownSeparator } from '@/components/ui/dropdownMenu/dropdownSeparator'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/dropdownMenu/dropdown.module.scss'

type Props = {
  email: string
  name: string
  photo?: string
  photoDesc: string
  profilePageHref: string
}

export const UserDropdown = ({ email, name, photo, photoDesc }: Props) => {
  return (
    <DropdownMenu
      trigger={
        <>
          <Typography className={s.header__userName} variant={'h3'}>
            {name || 'NoName'}
          </Typography>
          <img alt={photoDesc} className={s.userPhoto} src={photo} />
        </>
      }
    >
      <DropDownItem>
        <div className={s.photoAndEmail}>
          <img alt={photoDesc} className={s.dropdownMenuItem_img} src={photo} />
          <div className={s.nameAndEmail}>
            <Typography as={'div'} className={s.userName} variant={'subtitle2'}>
              {name}
            </Typography>
            <Typography as={'div'} className={s.userEmail} variant={'caption'}>
              {email}
            </Typography>
          </div>
        </div>
      </DropDownItem>
      <DropdownSeparator />
      <DropDownItem asChild>
        <Link to={'/profile'}>
          <PersonOutline color={'white'} />
          My Profile
        </Link>
      </DropDownItem>
      <DropdownSeparator />
      <Link to={'/login'}>
        <LogOut color={'white'} />
        Sign Out
      </Link>
    </DropdownMenu>
  )
}
