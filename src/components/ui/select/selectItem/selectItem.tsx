import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as SelectRadix from '@radix-ui/react-select'

import s from '@/components/ui/select/select.module.scss'

export type SelectItemProps = {
    children: ReactNode
    className?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Item>

export const SelectItem = ({ children, className, ...props }: SelectItemProps) => {
    return (
        <SelectRadix.Item className={`${s.item}`} {...props}>
            <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
        </SelectRadix.Item>
    )
}
