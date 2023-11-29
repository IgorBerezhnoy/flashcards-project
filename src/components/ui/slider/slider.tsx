import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type SliderProps = {
  value: number[]
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>
export const Slider = (props: SliderProps) => {
  const { max, value, ...rest } = props

  return (
    <div className={`${s.wrapper}`}>
      <Typography as={'div'} className={`${s.value}`} variant={'body2'}>
        {value?.[0]}
      </Typography>
      <SliderRadix.Root
        className={`${s.root}`}
        {...rest}
        defaultValue={value}
        max={max}
        minStepsBetweenThumbs={1}
        step={1}
      >
        <SliderRadix.Track className={`${s.track}`}>
          <SliderRadix.Range className={`${s.range}`} />
        </SliderRadix.Track>
        <SliderRadix.Thumb aria-label={'Volume'} className={`${s.thumb}`} defaultValue={value[0]} />
        <SliderRadix.Thumb aria-label={'Volume'} className={`${s.thumb}`} defaultValue={value[1]} />
      </SliderRadix.Root>
      <Typography as={'div'} className={`${s.value}`}>
        {value?.[1]}
      </Typography>
    </div>
  )
}
