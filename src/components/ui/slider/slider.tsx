import { ComponentPropsWithoutRef, useState } from 'react'

import { Typography } from '@/components/ui/typography'
import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type SliderProps = {
  setGlobalValue: any
  value: number[]
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>
export const Slider = (props: SliderProps) => {
  const { max, onValueChange, setGlobalValue, value, ...rest } = props
  const [localValue, setValue] = useState(value)

  return (
    <div className={`${s.wrapper}`}>
      <Typography as={'div'} className={`${s.value}`} variant={'body2'}>
        {localValue?.[0]}
      </Typography>
      <SliderRadix.Root
        className={`${s.root}`}
        {...rest}
        max={max}
        minStepsBetweenThumbs={1}
        onPointerUp={() => setGlobalValue(localValue)}
        onValueChange={setValue}
        step={1}
        value={localValue}
      >
        <SliderRadix.Track className={`${s.track}`}>
          <SliderRadix.Range className={`${s.range}`} />
        </SliderRadix.Track>
        <SliderRadix.Thumb aria-label={'Volume'} className={`${s.thumb}`} defaultValue={value[0]} />
        <SliderRadix.Thumb aria-label={'Volume'} className={`${s.thumb}`} defaultValue={value[1]} />
      </SliderRadix.Root>
      <Typography as={'div'} className={`${s.value}`}>
        {localValue?.[1]}
      </Typography>
    </div>
  )
}
