import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignIn } from '@/components/layout/login-forms/sign-in'
import { useLoginMutation } from '@/services/auth/auth.service'
import { LoginParams } from '@/services/auth/auth.types'
import { ErrorType } from '@/services/decks/decks.types'

import s from './sign-in-page.module.scss'

export const SignInPage = () => {
  const navigate = useNavigate()
  const [login, { error, isError }] = useLoginMutation()

  const loginHandler = async (data: LoginParams) => {
    try {
      await login(data)
      navigate('/')
    } catch (e: any) {
      const err = e as ErrorType

      toast.error(err?.data?.message)
    }
  }

  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message)
  }

  return (
    <div className={s.body}>
      <div className={`${s.body__box} body__box`}>
        <SignIn onSubmit={loginHandler} />
      </div>
    </div>
  )
}
