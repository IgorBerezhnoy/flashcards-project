import type { Meta, StoryObj } from '@storybook/react'

import { OptionsValue, Select } from './select'

const meta = {
    component: Select,
    tags: ['autodocs'],
    title: 'Components/UI/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const mockOptions: OptionsValue[] = [
    { title: 'test1', value: 'test1' },
    { title: 'test2', value: 'test2' },
    { title: 'test3', value: 'test3' },
]

export const SelectMain: Story = {
    args: {
        label: 'Select-box',
        options: mockOptions,
        placeholder: 'Test select...',
    },
}

export const SelectDisabled: Story = {
    args: {
        disabled: true,
        label: 'Select-box',
        options: mockOptions,
        placeholder: 'Test select...',
    },
}
