import { Profile } from '@/components/layout/login-forms/profile'
import { Loader } from '@/components/ui'
import { useMeQuery } from '@/services/auth/auth.service'

export const ProfileWrapper = () => {
  const { data, isError, isLoading } = useMeQuery()

  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return <h1>Error</h1>
  }
  const { avatar: src, email, name } = data!

  return <Profile data={{ email, name, src }} />
}
