import type { Meta, StoryObj } from '@storybook/react'

import {
  Edit2Outline,
  LogOut,
  MoreVerticalOutline,
  PersonOutline,
  PlayCircleOutline,
  TrashOutline,
} from '@/assets'
import { DropDownItem } from '@/components/ui/dropdownMenu/dropDownItem'
import { DropdownMenu } from '@/components/ui/dropdownMenu/dropdownMenu'
import { DropdownSeparator } from '@/components/ui/dropdownMenu/dropdownSeparator'
import { Typography } from '@/components/ui/typography'

import s from '@/components/ui/dropdownMenu/dropdown.module.scss'

import foto from '../../../../public/img/userPhotoForTest.png'

const meta = {
  component: DropdownMenu,
  tags: ['autodocs'],
  title: 'Components/UI/DropdownMenu',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

const user = {
  email: 'j&johnson@gmail.com',
  name: 'Ivan',
  photo: { alt: 'UserPhoto', src: foto },
}

export const WithUser: Story = {
  args: {
    children: (
      <div>
        <DropDownItem>
          <div className={s.photoAndEmail}>
            <img alt={user.photo.alt} className={s.dropdownMenuItem_img} src={user.photo.src} />
            <div className={s.nameAndEmail}>
              <Typography as={'div'} className={s.userName} variant={'subtitle2'}>
                {user.name}
              </Typography>
              <Typography as={'div'} className={s.userEmail} variant={'caption'}>
                {user.email}
              </Typography>
            </div>
          </div>
        </DropDownItem>
        <DropdownSeparator />
        <DropDownItem asChild>
          <Typography as={'div'} className={s.dropdownMenuItem} variant={'caption'}>
            <PersonOutline className={s.icons} />
            My Profile
          </Typography>
        </DropDownItem>
        <DropdownSeparator />
        <DropDownItem>
          <Typography as={'div'} className={s.dropdownMenuItem} variant={'caption'}>
            <LogOut className={s.icons} />
            Sign Out
          </Typography>
        </DropDownItem>
      </div>
    ),
    trigger: <img alt={user.photo.alt} src={user.photo.src} style={{ borderRadius: '100%' }} />,
  },
}
export const WithOutUser: Story = {
  args: {
    children: (
      <div>
        <DropDownItem>
          <Typography as={'div'} className={s.dropdownMenuItem} variant={'caption'}>
            <PlayCircleOutline className={s.icons} />
            Learn
          </Typography>
        </DropDownItem>
        <DropdownSeparator />
        <DropDownItem>
          <Typography as={'div'} className={s.dropdownMenuItem} variant={'caption'}>
            <Edit2Outline className={s.icons} />
            Edit
          </Typography>
        </DropDownItem>{' '}
        <DropdownSeparator />
        <DropDownItem>
          <Typography as={'div'} className={s.dropdownMenuItem} variant={'caption'}>
            <TrashOutline className={s.icons} />
            Delete
          </Typography>
        </DropDownItem>
      </div>
    ),
    trigger: <MoreVerticalOutline />,
  },
}
