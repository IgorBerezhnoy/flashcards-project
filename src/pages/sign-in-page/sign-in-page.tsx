import { SignIn } from '@/components/layout/login-forms/sign-in'
import { Header } from '@/components/ui/header'
import { Page } from '@/components/ui/page'
import { useLoginMutation } from '@/services/auth.service'
import { LoginParams } from '@/services/auth.types'

import s from './sign-in-page.module.scss'

export const SignInPage = () => {
  const [login] = useLoginMutation()

  const loginHandler = (data: LoginParams) => {
    login(data)
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
