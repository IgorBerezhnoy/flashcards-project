import { ComponentPropsWithoutRef } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'
import {Typography} from "@/components/ui/typography";

export type SliderProps = {
  value: number[]
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>
export const Slider = (props: SliderProps) => {
  const { value, ...rest } = props

  return (
    <div className={`${s.wrapper}`}>
      <Typography as={'div'} className={`${s.value}`} variant={'body2'}>
        {value?.[0]}
      </Typography>
      <SliderRadix.Root className={`${s.root}`} {...rest} defaultValue={value} max={100} step={1}>
        <SliderRadix.Track className={`${s.track}`}>
          <SliderRadix.Range className={`${s.range}`} />
        </SliderRadix.Track>
        <SliderRadix.Thumb aria-label={'Volume'} className={`${s.thumb}`} />
        <SliderRadix.Thumb aria-label={'Volume'} className={`${s.thumb}`} />
      </SliderRadix.Root>
      <Typography as={'div'} className={`${s.value}`}>
        {value?.[1]}
      </Typography>
    </div>
  )
}
