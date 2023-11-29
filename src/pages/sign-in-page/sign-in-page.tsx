import { SignIn } from '@/components/layout/login-forms/sign-in'
import { Header } from '@/components/ui/header'
import { Page } from '@/components/ui/page'

import s from './sign-in-page.module.scss'

export const SignInPage = () => {
  return (
    <Page>
      <Header isLogin={false} />
      <div className={s.body}>
        <div className={`${s.body__box} body__box`}>
          <SignIn />
        </div>
      </div>
    </Page>
  )
}
