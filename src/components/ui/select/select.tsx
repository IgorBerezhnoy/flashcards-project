import { ComponentPropsWithoutRef } from 'react'

import { SelectItem } from '@/components/ui/select/selectItem'
import { Typography } from '@/components/ui/typography'
import { ChevronDown } from '@/icons'
import * as SelectRadix from '@radix-ui/react-select'

import s from './select.module.scss'

export type OptionsValue = {
  title: string
  value: string
}

export type SelectProps = {
  label?: string
  options?: OptionsValue[]
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = ({ disabled, label, options, placeholder }: SelectProps) => {
  return (
    <div className={s.wrapper}>
      <Typography className={'test'} variant={'body2'}>
        {label}
      </Typography>
      <SelectRadix.Root>
        <SelectRadix.Trigger
          aria-label={'Food'}
          className={`${s.trigger} ${disabled && s.disabled} `}
          disabled={disabled}
        >
          <SelectRadix.Value placeholder={placeholder} />
          <SelectRadix.Icon className={`${s.icon}`}>
            <ChevronDown />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content className={`${s.content}`} collisionPadding={0} position={'popper'}>
            <SelectRadix.Viewport>
              <SelectRadix.Group>
                {options?.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.title}
                  </SelectItem>
                ))}
              </SelectRadix.Group>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </div>
  )
}
