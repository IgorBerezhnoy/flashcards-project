import { useNavigate } from 'react-router-dom'

import { ForgotPassword } from '@/components/layout/login-forms/forgot-password'
import { Header } from '@/components/ui/header'
import { Page } from '@/components/ui/page'
import { useRecoverPasswordMutation } from '@/services/auth/auth.service'

import s from './forgotPassword-page.module.scss'

export const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const [recoverPassword] = useRecoverPasswordMutation()

  const recoverPasswordSub = async (data: { email: string }) => {
    try {
      await recoverPassword(data)
      navigate('/check-email', {
        state: {
          email: data.email,
        },
      })
    } catch (e: any) {
      console.error(e)
      //TODO Нужно поставить тост
      // const notify = () => toast(e);
      // notify()
      // < ToastContainer / >
    }
  }

  return (
    <Page>
      <Header isLogin={false} />
      <div className={s.body}>
        <div className={`${s.body__box} body__box`}>
          <ForgotPassword onSubmit={recoverPasswordSub} />
        </div>
      </div>
    </Page>
  )
}
