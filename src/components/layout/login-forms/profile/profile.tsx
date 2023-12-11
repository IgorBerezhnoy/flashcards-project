import { ChangeEvent, useRef, useState } from 'react'

import { Edit2Outline } from '@/assets'
import { EditProfile, EditProfileData } from '@/components/layout/login-forms/profile/edit-profile'
import { InfoProfile } from '@/components/layout/login-forms/profile/info-profile'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { usePatchUserMutation } from '@/services/auth/auth.service'
import { PatchUserType } from '@/services/auth/auth.types'

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
  const { email, name } = data
  const [editMode, setEditMode] = useState(false)
  const [updateUserData] = usePatchUserMutation()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [profileData, setProfileData] = useState<ProfileData>(data)

  const onSubmit = async (data: EditProfileData) => {
    const formData = new FormData()

    formData.append('name', data.name)

    await updateUserData(formData as unknown as PatchUserType)

    setEditMode(false)
  }

  const onEditProfile = () => {
    setEditMode(true)
  }

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (file) {
      const reader = new FileReader()

      reader.onload = async () => {
        const newSrc = reader.result as string

        setProfileData(prevData => ({ ...prevData, src: newSrc }))

        const formData = new FormData()

        formData.append('avatar', file)
        await updateUserData(formData as unknown as { avatar: string })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Card className={s.container}>
      <Typography as={'h2'} className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <div className={s.avatarBlock}>
        <img alt={name} className={s.avatar} src={profileData.src} />
        <div className={s.icon} onClick={handleIconClick}>
          <Edit2Outline className={s.iconAvatar} />
          <input
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
            type={'file'}
          />
        </div>
      </div>
      {editMode ? (
        <EditProfile cancel={() => setEditMode(false)} defaultValue={name} onSubmit={onSubmit} />
      ) : (
        <InfoProfile email={email} name={name} onEditProfile={onEditProfile} />
      )}
    </Card>
  )
}
