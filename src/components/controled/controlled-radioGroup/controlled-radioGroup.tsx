import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioType } from '@/components/ui/radio'
import { RadioGroupProps } from '@radix-ui/react-radio-group'

type Props<T extends FieldValues> = {
  label: string
  radioGroup: RadioType[]
} & UseControllerProps<T> &
  Omit<RadioGroupProps, 'id' | 'onChange' | 'value'>
export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  label,
  name,
  radioGroup,
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

  return (
    <RadioGroup
      ref={ref}
      {...rest}
      defaultValue={value}
      disabled={disabled}
      onCheck={onChange}
      radioGroup={radioGroup}
    />
  )
}
