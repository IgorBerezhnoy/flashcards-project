import { useLocation } from 'react-router-dom'

import { CheckEmailForm } from '@/components/layout/login-forms/check-email'
import { Header } from '@/components/ui/header'
import { Page } from '@/components/ui/page'

import s from './checkEmailForm-page.module.scss'

export const CheckEmailFormPage = () => {
  const location = useLocation()

  return (
    <Page>
      <Header isLogin={false} />
      <div className={s.body}>
        <div className={`${s.body__box} body__box`}>
          <CheckEmailForm email={location.state.email} />
        </div>
      </div>
    </Page>
  )
}
