import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
import { CheckboxProps } from '@radix-ui/react-checkbox'

type Props<T extends FieldValues> = {
  label: string
} & UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'id' | 'onChange'>
export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  label,
  name,
  rules,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    rules,
    shouldUnregister,
  })

  console.log(value)
  console.log(defaultValue)
  console.log(defaultValue)

  return (
    <Checkbox
      ref={ref}
      {...rest}
      checked={value}
      disabled={disabled}
      label={label}
      name={name}
      onValueChange={onChange}
    />
  )
}
