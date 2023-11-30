import { ArrowBackOutline } from '@/assets'
import { Link } from 'react-router-dom'

export const BackToPacksList = () => {
  return (
    <div>
      <ArrowBackOutline color={'white'} />
      <Link to={'/'}>Back to Packs List</Link>
    </div>
  )
}