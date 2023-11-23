import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup } from '@/components/ui/radio'
import { CheckboxProps } from '@radix-ui/react-checkbox'

import { Checkbox } from '../../../../../../cardWhithAndrew/card/src/components/ui/checkbox'

type Props<T extends FieldValues> = { label: string } & UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'id' | 'onChange'>
export const ControlledRadioGroup = <T extends FieldValues>({
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

  return <RadioGroup ref={ref} {...rest} defaultValue={value} disabled={disabled} />
}
