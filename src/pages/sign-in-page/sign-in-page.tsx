import { useNavigate } from 'react-router-dom'

import { SignIn } from '@/components/layout/login-forms/sign-in'
import { Header } from '@/components/ui/header'
import { Page } from '@/components/ui/page'
import { useLoginMutation } from '@/services/auth/auth.service'
import { LoginParams } from '@/services/auth/auth.types'

import s from './sign-in-page.module.scss'

export const SignInPage = () => {
  const navigate = useNavigate()
  const [login] = useLoginMutation()

  const loginHandler = (data: LoginParams) => {
    login(data)
      .unwrap()
      .then(() => {
        navigate('/')
      })
  }

  return (
    <Page>
      <Header isLogin={false} />
      <div className={s.body}>
        <div className={`${s.body__box} body__box`}>
          <SignIn onSubmit={loginHandler} />
        </div>
      </div>
    </Page>
  )
}
