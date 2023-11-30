import { ComponentPropsWithoutRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

export type SliderProps = {
  localSliderValue: number[]
  setGlobalValue: (values: number[]) => void
  setLocalSliderValue: (values: number[]) => void
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>
export const Slider = (props: SliderProps) => {
  const {
    localSliderValue,
    max,
    onValueChange,
    setGlobalValue,
    setLocalSliderValue,
    value,
    ...rest
  } = props

  return (
    <div className={`${s.wrapper}`}>
      <Typography as={'div'} className={`${s.value}`} variant={'body2'}>
        {localSliderValue?.[0]}
      </Typography>
      <SliderRadix.Root
        className={`${s.root}`}
        {...rest}
        max={max}
        minStepsBetweenThumbs={1}
        onPointerUp={() => setGlobalValue(localSliderValue)}
        onValueChange={setLocalSliderValue}
        step={1}
        value={localSliderValue}
      >
        <SliderRadix.Track className={`${s.track}`}>
          <SliderRadix.Range className={`${s.range}`} />
        </SliderRadix.Track>
        <SliderRadix.Thumb
          aria-label={'Volume'}
          className={`${s.thumb}`}
          defaultValue={localSliderValue[0]}
        />
        <SliderRadix.Thumb
          aria-label={'Volume'}
          className={`${s.thumb}`}
          defaultValue={localSliderValue[1]}
        />
      </SliderRadix.Root>
      <Typography as={'div'} className={`${s.value}`}>
        {localSliderValue?.[1]}
      </Typography>
    </div>
  )
}
