import { ComponentPropsWithoutRef, useState } from 'react'

import { ArrowIosDownOutline, ArrowIosUp } from '@/assets'
import { SelectItem } from '@/components/ui/select/selectItem'
import { Typography } from '@/components/ui/typography'
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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={s.wrapper}>
      <Typography className={s.title} variant={'body2'}>
        {label}
      </Typography>
      <SelectRadix.Root onOpenChange={setIsOpen}>
        <SelectRadix.Trigger
          aria-label={'Food'}
          className={`${s.trigger} ${disabled && s.disabled} `}
          disabled={disabled}
        >
          <div className={s.value}>
            <SelectRadix.Value placeholder={placeholder} />
          </div>
          <SelectRadix.Icon className={s.icon}>
            {isOpen ? <ArrowIosUp /> : <ArrowIosDownOutline />}
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content className={`${s.content}`} collisionPadding={0} position={'popper'}>
            <SelectRadix.Viewport>
              <SelectRadix.Group>
                {options?.map(option => (
                  <SelectItem className={s.item} key={option.value} value={option.value}>
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
