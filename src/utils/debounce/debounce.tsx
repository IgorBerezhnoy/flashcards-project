import React, { useState } from 'react'

import { TextField, TextFieldProps } from '@/components/ui/textField'

export type SuperDebouncedInputPropsType = TextFieldProps & {
  onDebouncedChange?: (value: string) => void
}

export const DebouncedInput: React.FC<SuperDebouncedInputPropsType> = ({
  onDebouncedChange,
  onValueChange,
  ...restProps
}) => {
  const [timerId, setTimerId] = useState<number | undefined>(undefined)

  const onChangeTextCallback = (value: string) => {
    onValueChange?.(value)

    if (onDebouncedChange) {
      clearTimeout(timerId)
      const timer = setTimeout(() => {
        onDebouncedChange(value)
      }, 1000)

      setTimerId(Number(timer))
    }
  }

  return <TextField onValueChange={onChangeTextCallback} {...restProps} />
}
