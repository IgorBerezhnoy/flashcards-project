import { useLocation } from 'react-router-dom'

import { CheckEmailForm } from '@/components/layout/login-forms/check-email'

import s from './checkEmailForm-page.module.scss'

export const CheckEmailFormPage = () => {
  const location = useLocation()

  return (
    <div className={s.body}>
      <div className={`${s.body__box} body__box`}>
        <CheckEmailForm email={location.state.email} />
      </div>
    </div>
  )
}
