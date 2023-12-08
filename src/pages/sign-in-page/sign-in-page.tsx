import { useNavigate } from 'react-router-dom'

import { SignIn } from '@/components/layout/login-forms/sign-in'
import { useLoginMutation } from '@/services/auth/auth.service'
import { LoginParams } from '@/services/auth/auth.types'

import s from './sign-in-page.module.scss'

export const SignInPage = () => {
  const navigate = useNavigate()
  const [login] = useLoginMutation()

  const loginHandler = async (data: LoginParams) => {
    try {
      await login(data)
      navigate('/')
    } catch (e: any) {
      console.error(e)
      //TODO Нужно поставить тост
      // const notify = () => toast(e);
      // notify()
      // < ToastContainer / >
    }
  }

  return (
    <div className={s.body}>
      <div className={`${s.body__box} body__box`}>
        <SignIn onSubmit={loginHandler} />
      </div>
    </div>
  )
}
