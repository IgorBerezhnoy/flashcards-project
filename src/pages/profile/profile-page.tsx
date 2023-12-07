import { Header } from '@/components/ui/header'
import { Page } from '@/components/ui/page'
import { ProfileWrapper } from '@/pages/profile/profile-wrapper'

import s from './profile-page.module.scss'

export const ProfilePage = () => {
  return (
    <Page>
      <Header isLogin={false} />
      <div className={s.body}>
        <div className={`${s.body__box} body__box`}>
          <ProfileWrapper />
        </div>
      </div>
    </Page>
  )
}
