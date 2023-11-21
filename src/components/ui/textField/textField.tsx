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
  search?: boolean
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
      search,
      type,
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
      <>
        <div className={`${s.wrapper} `}>
          {label && <div className={s.label}>{label}</div>}
          <input
            className={`${s.defaultInput} ${className} ${errorMessage ? s.errorInput : ''}  ${
              type === 'search' && s.searchInput
            }`}
            onChange={onChangeHandler}
            ref={ref}
            type={isPassword ? 'password' : 'text'}
            {...restProps}
          />
          {type === 'search' && (
            <>
              <div className={s.searchIcon}>
                <Search />
              </div>
              <div className={s.crossIcon} onClick={() => (clearText ? clearText() : () => {})}>
                <CloseOutline />
              </div>
            </>
          )}
          {isPassword && (
            <div className={s.eyesIcon} onClick={() => setIsPassword(false)}>
              <Eye />
            </div>
          )}
          {type === 'password' && !isPassword && (
            <div className={s.eyesIcon} onClick={() => setIsPassword(true)}>
              <EyeOff />
            </div>
          )}
        </div>
        {errorMessage && <div className={s.errorText}>{errorMessage}</div>}
      </>
    )
  }
)
