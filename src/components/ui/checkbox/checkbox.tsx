import { ElementRef, forwardRef } from 'react'

import { CheckMarkIcon } from '@/assets/icons/checkMarkIcon'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckboxProps, CheckedState } from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

type CheckboxType = CheckboxProps & {
  checked?: CheckedState
  className?: string
  defaultChecked?: CheckedState
  disabled?: boolean
  id?: string
  label?: string | undefined
  onValueChange?: (checked: boolean) => void
}

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxType>(
  ({ className, disabled = false, id, label, onValueChange, ...rest }, ref) => {
    return (
      <div className={s.wrapper}>
        <CheckboxRadix.Root
          className={s.checkboxRoot}
          disabled={disabled}
          onCheckedChange={onValueChange}
          ref={ref}
          {...rest}
          id={id}
        >
          <CheckboxRadix.Indicator className={s.checkboxIndicator}>
            <CheckMarkIcon color={disabled ? '#dad9df' : 'black'} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        <Typography
          as={'label'}
          className={`${s.label} ${disabled ? s.labelDisabled : ''}`}
          color={'white'}
          htmlFor={id}
        >
          {label}
        </Typography>
      </div>
    )
  }
)
