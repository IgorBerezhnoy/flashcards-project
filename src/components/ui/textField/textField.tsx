import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'

import { ClouseEyes, Cross, OpenEyes, Search } from '@/assets/icons/icons'

import s from './textField.module.scss'

export type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export type TextFieldProps = Omit<DefaultInputPropsType, 'type'> & {
  className?: string
  clearText?: () => void
  error?: null | string
  label: string
  onChange: (e: string) => void
  type?: 'default' | 'password' | 'search'
}

export const TextField = (props: TextFieldProps) => {
  const { className, clearText, error = null, label, onChange, type, ...rest } = props
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }
  const [isPassword, setIsPassword] = useState(type === 'password')

  return (
    <>
      <div className={`${s.wrapper} `}>
        {label && <div className={s.label}>{label}</div>}
        <input
          className={`${s.defaultInput} ${className} ${error ? s.errorInput : ''}  ${
            type === 'search' && s.searchInput
          }`}
          onChange={onChangeHandler}
          type={isPassword ? 'password' : 'text'}
          {...rest}
        />
        {type === 'search' && (
          <>
            <div className={s.searchIcon}>
              <Search />
            </div>
            <div className={s.crossIcon} onClick={() => (clearText ? clearText() : () => {})}>
              <Cross />
            </div>
          </>
        )}
        {isPassword && (
          <div className={s.eyesIcon} onClick={() => setIsPassword(false)}>
            <OpenEyes />
          </div>
        )}
        {type === 'password' && !isPassword && (
          <div className={s.eyesIcon} onClick={() => setIsPassword(true)}>
            <ClouseEyes />
          </div>
        )}
      </div>
      {error && <div className={s.errorText}>{error}</div>}
    </>
  )
}
