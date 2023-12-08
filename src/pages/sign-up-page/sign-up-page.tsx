import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignUp } from '@/components/layout/login-forms/sign-up'
import { useSingUpMutation } from '@/services/auth/auth.service'
import { SingUpFormData } from '@/services/auth/auth.types'

import s from './sign-up-page.module.scss'

export const SignUpPage = () => {
  const navigate = useNavigate()
  const [singUp] = useSingUpMutation()

  const singUpHandler = async (data: SingUpFormData) => {
    try {
      await singUp(data)
      navigate('/login')
      toast('🦄 Are you registered')
    } catch (e: any) {
      console.error(e)
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
