import s from './linear.module.scss'

type Props = {
  className?: string
}
export const Linear = ({ className }: Props) => {
  return (
    <div className={`${s.loader} ${className}`}>
      <div className={s.loaderGradient}></div>
    </div>
  )
}
