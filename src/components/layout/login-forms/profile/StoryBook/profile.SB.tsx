import { ChangeEvent, useRef, useState } from 'react'

import { Edit2Outline } from '@/assets'
import { EditProfileSB } from '@/components/layout/login-forms/profile/StoryBook/edit-profile.SB'
import { InfoProfileSB } from '@/components/layout/login-forms/profile/StoryBook/info-profile.SB'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './../profile.module.scss'

export type ProfileData = {
  email: string
  name: string
  src: string
}

type Props = {
  data: ProfileData
}

export const ProfileSB = ({ data }: Props) => {
  const { email, name } = data
  const [editMode, setEditMode] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [profileData, setProfileData] = useState<ProfileData>(data)

  const onSubmit = async () => setEditMode(false)

  const onEditProfile = () => setEditMode(true)

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
        <EditProfileSB cancel={() => setEditMode(false)} defaultValue={name} onSubmit={onSubmit} />
      ) : (
        <InfoProfileSB email={email} name={name} onEditProfile={onEditProfile} />
      )}
    </Card>
  )
}
