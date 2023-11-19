import { LogOut } from '@/assets'
import { DropDownItem } from '@/components/ui/dropdownMenu/dropDownItem'
import { DropdownMenu } from '@/components/ui/dropdownMenu/dropdownMenu'
import { DropdownSeparator } from '@/components/ui/dropdownMenu/dropdownSeparator'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/dropdownMenu/dropdown.module.scss'

type Props = {
  email: string
  name: string
  photo: string
  photoDesc: string
  profilePageHref: string
}

export const UserDropdown = ({ email, name, photo, photoDesc, profilePageHref }: Props) => {
  return (
    <DropdownMenu trigger={<img alt={photoDesc} src={photo} />}>
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
        <a href={profilePageHref}>
          {/*<WhitePerson color={'white'} height={'16'} width={'16'} />*/}
          My Profile
        </a>
      </DropDownItem>
      <DropdownSeparator />
      <DropDownItem>
        <LogOut color={'white'} height={'16'} width={'16'} />
        Sign Out
      </DropDownItem>
    </DropdownMenu>
  )
}
