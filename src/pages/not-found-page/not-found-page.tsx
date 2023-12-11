import { NavLink } from 'react-router-dom'

import { Button } from '@/components/ui'

import s from './not-found-page.module.scss'

import img from '../../assets/image/Group.png'

export const NotFoundPage = () => {
  return (
    <div className={s.body}>
      <div className={`${s.body__box} body__box`}>
        <img alt={'not found page'} className={s.img} src={img} />
        <div className={s.text}>Sorry! Page not found!</div>
        <NavLink to={'/'}>
          <Button className={s.btn} variant={'primary'}>
            Back to home page
          </Button>
        </NavLink>
      </div>
    </div>
  )
}
