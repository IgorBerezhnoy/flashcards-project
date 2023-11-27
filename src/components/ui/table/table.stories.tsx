import type { Meta, StoryObj } from '@storybook/react'

import { Table } from '@/components/ui/table/table'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/UI/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const columnOrder = ['title', 'cardsCount', 'updated', 'createdBy']

const data = [
  {
    cardsCount: 100,
    createdBy: 'Илья Кузнецов',
    figma: 3,
    title: 'Pack Name A',
    updated: '2023-07-07',
  },
  {
    cardsCount: 23,
    createdBy: 'Анастасия Смирнова',
    figma: 3,
    title: 'Pack Name B',
    updated: '2023-07-06',
  },
  {
    cardsCount: 8,
    createdBy: 'Дмитрий Петров',
    figma: 3,
    title: 'Pack Name C',
    updated: '2023-07-05',
  },
  {
    cardsCount: 6,
    createdBy: 'Екатерина Иванова',
    figma: 3,
    title: 'Pack Name D',
    updated: '2023-07-07',
  },
  {
    cardsCount: 24,
    createdBy: 'Александр Федоров',
    figma: 3,
    title: 'Pack Name E',
    updated: '2023-07-04',
  },
]

export const TableTest: Story = {
  args: {
    columnOrder: columnOrder,
    data,
  },
}
