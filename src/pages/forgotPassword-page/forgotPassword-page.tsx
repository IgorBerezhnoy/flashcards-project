import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ForgotPassword } from '@/components/layout/login-forms/forgot-password'
import { useRecoverPasswordMutation } from '@/services/auth/auth.service'
import { ErrorType } from '@/services/decks/decks.types'

import s from './forgotPassword-page.module.scss'

export const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const [recoverPassword, { error, isError }] = useRecoverPasswordMutation()

  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message)
  }
  const recoverPasswordSub = async (data: { email: string }) => {
    try {
      await recoverPassword(data)
      navigate('/check-email', {
        state: {
          email: data.email,
        },
      })
    } catch (e) {
      const err = e as ErrorType

      toast.error(err.data.message)
    }
  }

  return (
    <div className={s.body}>
      <div className={`${s.body__box} body__box`}>
        <ForgotPassword onSubmit={recoverPasswordSub} />
      </div>
    </div>
  )
}
