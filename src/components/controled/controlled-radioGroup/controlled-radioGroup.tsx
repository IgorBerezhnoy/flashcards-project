import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { RadioGroup, RadioType } from '@/components/ui/radio'

export type ControlledRadioGroupProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  radioGroup: RadioType[]
}
// & Omit<RadioGroupProps, 'id' | 'onChange' | 'value'>

export const ControlledRadioGroup = <TFieldValues extends FieldValues>(
  props: ControlledRadioGroupProps<TFieldValues>
) => {
  const {
    field: { onChange, ...field },
  } = useController({
    control: props.control,
    name: props.name,
  })

  return (
    <RadioGroup
      {...props}
      {...field}
      id={props.name}
      onValueChange={onChange}
      radioGroup={props.radioGroup}
    />
  )
}
