import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

export type CardProps = ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<ElementRef<'div'>, CardProps>(({ className, ...restProps }, ref) => {
  return (
    <div
      className={clsx(s.wrapperCard, className)}
      // className={`${s.wrapperCard} ${className ? className : ''}`}
      {...restProps}
      ref={ref}
    ></div>
  )
})
//
