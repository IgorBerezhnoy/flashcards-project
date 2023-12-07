import { useState } from 'react'

import { Edit2Outline } from '@/assets'
import { EditProfile, EditProfileData } from '@/components/layout/login-forms/profile/edit-profile'
import { InfoProfile } from '@/components/layout/login-forms/profile/info-profile'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { usePatchUserMutation } from '@/services/auth/auth.service'

import s from './profile.module.scss'

export type ProfileData = {
  email: string
  name: string
  src: string
}

type Props = {
  data: ProfileData
}

export const Profile = ({ data }: Props) => {
  const { email, name, src } = data
  const [editMode, setEditMode] = useState(false)
  const [updateUserData] = usePatchUserMutation()

  const onEditProfile = () => {
    setEditMode(true)
  }

  const onSubmit = (data: EditProfileData) => {
    updateUserData(data)
    setEditMode(false)
  }

  return (
    <Card className={s.container}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <div className={s.avatarBlock}>
        <img alt={name} className={s.avatar} src={src} />
        <div className={s.icon}>
          <Edit2Outline />
          <input
            onChange={e => {
              const file = e.target?.files?.[0]
              const formData = new FormData()

              if (file) {
                formData.append('avatar', file)
              }
              updateUserData(formData as unknown as { avatar: string })
            }}
            type={'file'}
          />
        </div>
      </div>
      {editMode ? (
        <EditProfile onSubmit={onSubmit} />
      ) : (
        <InfoProfile email={email} name={name} onEditProfile={onEditProfile} />
      )}
    </Card>
  )
}
