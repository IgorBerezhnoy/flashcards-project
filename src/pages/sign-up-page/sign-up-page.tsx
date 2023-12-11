import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignUp } from '@/components/layout/login-forms/sign-up'
import { useSingUpMutation } from '@/services/auth/auth.service'
import { SingUpFormData } from '@/services/auth/auth.types'
import { ErrorType } from '@/services/decks/decks.types'

import s from './sign-up-page.module.scss'

export const SignUpPage = () => {
  const navigate = useNavigate()
  const [singUp, { error }] = useSingUpMutation()

  const singUpHandler = async (data: SingUpFormData) => {
    try {
      await singUp(data)
      navigate('/login')
      toast('🦄 Are you registered')
    } catch (e: any) {
      const err = error as ErrorType

      toast.error(err?.data?.message)
    }
  }

  return (
    <div className={s.body}>
      <div className={`${s.body__box} body__box`}>
        <SignUp onSubmit={singUpHandler} />
      </div>
    </div>
  )
}
