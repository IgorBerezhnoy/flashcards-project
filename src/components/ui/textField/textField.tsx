import {
  ChangeEvent,
  ComponentProps,
  ComponentPropsWithoutRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react'

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
    const [isInputFocused, setIsInputFocused] = useState(false)
    const rootNodeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (rootNodeRef.current && !rootNodeRef.current.contains(event.target as Node)) {
          setIsInputFocused(false)
        }
      }

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          setIsInputFocused(false)
        }
      }

      document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)

      return () => {
        document.removeEventListener('click', handleClickOutside)
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [])

    const handleInputFocus = () => {
      setIsInputFocused(true)
    }

    const handleInputBlur = () => {
      setIsInputFocused(false)
    }

    return (
      <div className={s.inputContainer} ref={rootNodeRef}>
        <div className={s.wrapper}>
          {label && <div className={s.label}>{label}</div>}
          <input
            className={`${s.defaultInput} ${className} ${errorMessage ? s.errorInput : ''} ${
              type === 'search' && s.searchInput
            }`}
            onBlur={handleInputBlur}
            onChange={onChangeHandler}
            onFocus={handleInputFocus}
            placeholder={placeholder}
            ref={ref}
            type={isPassword ? 'password' : 'text'}
            value={value}
            {...restProps}
          />
          {type === 'search' && (
            <>
              <div className={`${s.searchIcon} ${isInputFocused ? s.iconFocused : ''}`}>
                <Search className={s.icon} />
              </div>
              <div className={s.crossIcon} onClick={() => (clearText ? clearText() : () => {})}>
                {value && <CloseOutline className={s.icon} />}
              </div>
            </>
          )}
          {type === 'password' && (
            <div
              className={`${s.eyesIcon} ${isInputFocused ? s.iconFocused : ''}`}
              onClick={() => setIsPassword(!isPassword)}
            >
              {isPassword ? <Eye className={s.icon} /> : <EyeOff className={s.icon} />}
            </div>
          )}
        </div>
        {errorMessage && <div className={s.errorText}>{errorMessage}</div>}
      </div>
    )
  }
)
