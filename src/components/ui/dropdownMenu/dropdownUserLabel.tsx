import { UserType } from '@/components/ui/dropdownMenu/dropdownMenu'
import { Typography } from '@/components/ui/typography'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from '@/components/ui/dropdownMenu/dropdown.module.scss'

type Type = { user: UserType }
export const DropdownUserLabel = (props: Type) => {
  const { email, photo, userName } = props.user

  return (
    <>
      <DropdownMenuRadix.Label className={s.dropdownMenuItem}>
        <div className={s.photoAndEmail}>
          <img alt={photo.alt} className={s.dropdownMenuItem_img} src={photo.srs} />
          <div className={s.nameAndEmail}>
            <Typography as={'div'} className={s.userName} variant={'subtitle2'}>
              {userName}
            </Typography>
            <Typography as={'div'} className={s.userEmail} variant={'caption'}>
              {email}
            </Typography>
          </div>
        </div>
      </DropdownMenuRadix.Label>
    </>
  )
}
