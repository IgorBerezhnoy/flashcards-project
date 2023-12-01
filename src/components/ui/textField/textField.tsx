import { ChangeEvent, ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { CloseOutline, Eye, EyeOff, Search } from '@/assets'

import s from './textField.module.scss'

export type TextFieldProps = {
  clearText?: () => void
  containerProps?: ComponentProps<'div'>
  errorMessage?: null | string
  label?: string
  labelProps?: ComponentProps<'label'>
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      clearText,
      containerProps,
      errorMessage,
      label,
      labelProps,
      onChange,
      onValueChange,
      placeholder,
      type,
      value,
      ...restProps
    },
    ref
  ) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.currentTarget.value)
    }
    const [isPassword, setIsPassword] = useState(type === 'password')

    return (
      <div className={s.inputContainer}>
        <div className={s.wrapper}>
          {label && <div className={s.label}>{label}</div>}
          <input
            className={`${s.defaultInput} ${className} ${errorMessage ? s.errorInput : ''}  ${
              type === 'search' && s.searchInput
            }`}
            onChange={onChangeHandler}
            placeholder={placeholder}
            ref={ref}
            type={isPassword ? 'password' : 'text'}
            value={value}
            {...restProps}
          />
          {type === 'search' && (
            <>
              <div className={s.searchIcon}>
                <Search className={s.icon} />
              </div>
              <div className={s.crossIcon} onClick={() => (clearText ? clearText() : () => {})}>
                {value && <CloseOutline className={s.icon} />}
              </div>
            </>
          )}
          {isPassword && (
            <div className={s.eyesIcon} onClick={() => setIsPassword(false)}>
              <Eye className={s.icon} />
            </div>
          )}
          {type === 'password' && !isPassword && (
            <div className={s.eyesIcon} onClick={() => setIsPassword(true)}>
              <EyeOff className={s.icon} />
            </div>
          )}
        </div>
        {errorMessage && <div className={s.errorText}>{errorMessage}</div>}
      </div>
    )
  }
)
