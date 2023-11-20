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
  onChange: (checked: boolean) => void
}

export const Checkbox = (props: CheckboxType) => {
  const { className, disabled = false, id, label, onChange, ...rest } = props

  return (
    <div className={s.checkbox_label}>
      <div className={s.wrapper}>
        <div className={s.around}>
          <CheckboxRadix.Root
            className={s.checkboxRoot}
            disabled={disabled}
            onCheckedChange={onChange}
            {...rest}
            id={id}
          >
            <CheckboxRadix.Indicator className={s.checkboxIndicator}>
              <CheckMarkIcon color={disabled ? '#dad9df' : 'black'} />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
      </div>
      <Typography color={'white'}>
        <label className={`${s.label} ${disabled ? s.labelDisabled : ''}`} htmlFor={'c1'}>
          {label}
        </label>
      </Typography>
    </div>
  )
}
