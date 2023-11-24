import { Star, StarOutline } from '@/assets'

import s from './rating.module.scss'

export function Rating({ onClick, value }: RatingPropsType) {
  return (
    <div>
      <StarRating onClick={onClick} selected={value >= 1} value={1} />
      <StarRating onClick={onClick} selected={value >= 2} value={2} />
      <StarRating onClick={onClick} selected={value >= 3} value={3} />
      <StarRating onClick={onClick} selected={value >= 4} value={4} />
      <StarRating onClick={onClick} selected={value >= 5} value={5} />
    </div>
  )
}

function StarRating({ onClick, selected, value }: StarPropsType) {
  return (
    <span onClick={() => onClick(value)}>
      {selected ? <Star className={s.icon} /> : <StarOutline className={s.icon} />}
    </span>
  )
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
  onClick: (value: RatingValueType) => void
  value: RatingValueType
}
type StarPropsType = {
  onClick: (value: RatingValueType) => void
  selected: boolean
  value: RatingValueType
}
