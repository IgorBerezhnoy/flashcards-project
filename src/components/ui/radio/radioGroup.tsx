import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

type RadioType = {
  label: string
  value: string
}
type RadioGroupPropsType = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  onCheck?(): void
  radioGroup: RadioType[]
}

export const RadioGroup = (props: RadioGroupPropsType) => {
  const { className, defaultValue, disabled = false, radioGroup } = props

  const radioItem = radioGroup.map((el, i) => (
    <div className={s.radioAndLabel} key={i}>
      <div className={s.around}>
        <RadioGroupRadix.Item className={s.radioGroupItem} id={i.toString()} value={el.value}>
          <RadioGroupRadix.Indicator
            className={`${s.radioGroupIndicator} ${
              defaultValue === el.value && disabled ? s.radioGroupIndicatorDisabled : ''
            }`}
          />
        </RadioGroupRadix.Item>
      </div>
      <label className={`${s.label} ${disabled ? s.labelDisabled : ''}`}>{el.label}</label>
    </div>
  ))

  return (
    <RadioGroupRadix.Root
      className={`${s.radioGroupRoot} ${className ? s[className] : ''}`}
      defaultValue={defaultValue}
      disabled={disabled}
    >
      <div className={s.radioGroupItems}>{radioItem}</div>
    </RadioGroupRadix.Root>
  )
}
