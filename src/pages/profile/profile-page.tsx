import { toast } from 'react-toastify'

import { Profile } from '@/components/layout/login-forms/profile'
import { Loader } from '@/components/ui'
import { useMeQuery } from '@/services/auth/auth.service'
import { ErrorType } from '@/services/decks/decks.types'

import s from './profile-page.module.scss'

export const ProfilePage = () => {
  const { data, error, isError, isLoading } = useMeQuery()

  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message)
  }
  const { avatar: src, email, name } = data!

  return (
    <div className={s.body}>
      <div className={`${s.body__box} body__box`}>
        <Profile data={{ email, name, src }} />
      </div>
    </div>
  )
}
