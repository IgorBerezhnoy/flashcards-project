import { ElementRef, forwardRef } from 'react'

import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export type RadioType = {
  id: string
  label: string
  value: string
}
type RadioGroupPropsType = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  name: string
  onValueChange?: () => void
  radioGroup: RadioType[]
}

export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupRadix.Root>, RadioGroupPropsType>(
  ({ className, defaultValue, disabled = false, name, onValueChange, radioGroup }, ref) => {
    const radioItems = radioGroup.map(el => (
      <div className={s.radioAndLabel} key={el.id}>
        <div className={s.around}>
          <RadioGroupRadix.Item className={s.radioGroupItem} id={el.id} value={el.value}>
            <RadioGroupRadix.Indicator
              className={`${s.radioGroupIndicator} ${
                defaultValue === el.value && disabled ? s.radioGroupIndicatorDisabled : ''
              }`}
            />
          </RadioGroupRadix.Item>
        </div>
        <label className={`${s.label} ${disabled ? s.labelDisabled : ''}`} htmlFor={el.id}>
          {el.label}
        </label>
      </div>
    ))

    return (
      <RadioGroupRadix.Root
        className={`${s.radioGroupRoot} ${className ? s[className] : ''}`}
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        onValueChange={onValueChange}
        ref={ref}
      >
        <div className={s.radioGroupItems}>{radioItems}</div>
      </RadioGroupRadix.Root>
    )
  }
)
