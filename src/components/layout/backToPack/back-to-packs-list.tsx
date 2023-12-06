import { Link } from 'react-router-dom'

import { ArrowBackOutline } from '@/assets'

import s from './back-to-packs-list.module.scss'

export const BackToPacksList = () => {
  return (
    <div>
      <Link className={s.backToPacksList} to={'/'}>
        <ArrowBackOutline className={s.arrow} />
        <div>Back to Packs List</div>
      </Link>
    </div>
  )
}
