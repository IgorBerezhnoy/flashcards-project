import type { Meta, StoryObj } from '@storybook/react'

import { Edit2Outline, PlayCircleOutline, TrashOutline } from '@/assets'
import { Rating } from '@/components/ui/rating'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table/table'

import s from './table.module.scss'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/UI/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>
const cards = [
  {
    answer: 'How "This" works in JavaScript?',
    grade: 2,
    id: 1,
    lastUpdated: 'How "This" works in JavaScript?',
    question: '18.03.2021',
  },
  {
    answer: 'How "This" works in JavaScript?',
    grade: 2,
    id: 2,
    lastUpdated: 'How "This" works in JavaScript?',
    question: '18.03.2021',
  },
  {
    answer: 'How "This" works in JavaScript?',
    grade: 2,
    id: 3,
    lastUpdated: 'How "This" works in JavaScript?',
    question: '18.03.2021',
  },
  {
    answer: 'How "This" works in JavaScript?',
    grade: 2,
    id: 4,
    lastUpdated: 'How "This" works in JavaScript?',
    question: '18.03.2021',
  },
  {
    answer: 'How "This" works in JavaScript?',
    grade: 2,
    id: 5,
    lastUpdated: 'How "This" works in JavaScript?',
    question: '18.03.2021',
  },
  {
    answer: 'How "This" works in JavaScript?',
    grade: 2,
    id: 6,
    lastUpdated: 'How "This" works in JavaScript?',
    question: '18.03.2021',
  },
]

const data = [
  {
    cardsCount: 100,
    createdBy: 'Илья Кузнецов',
    id: 3,
    title: 'Pack Name A',
    updated: '2023-07-07',
  },
  {
    cardsCount: 23,
    createdBy: 'Анастасия Смирнова',
    id: 3,
    title: 'Pack Name B',
    updated: '2023-07-06',
  },
  {
    cardsCount: 8,
    createdBy: 'Дмитрий Петров',
    id: 3,
    title: 'Pack Name C',
    updated: '2023-07-05',
  },
  {
    cardsCount: 6,
    createdBy: 'Екатерина Иванова',
    id: 3,
    title: 'Pack Name D',
    updated: '2023-07-07',
  },
  {
    cardsCount: 24,
    createdBy: 'Александр Федоров',
    id: 3,
    title: 'Pack Name E',
    updated: '2023-07-04',
  },
]

export const TableDecks: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created by</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(deck => {
            return (
              <TableRow key={deck.id}>
                <TableCell>{deck.title}</TableCell>
                <TableCell>{deck.cardsCount}</TableCell>
                <TableCell>{new Date(deck?.updated).toLocaleDateString()}</TableCell>
                <TableCell>{deck.createdBy}</TableCell>
                <TableCell>
                  {
                    <div className={s.actions}>
                      <PlayCircleOutline
                        className={s.icon}
                        onClick={() => console.log('PlayCircleOutline')}
                      />
                      <Edit2Outline
                        className={s.icon}
                        onClick={() => console.log('Edit2Outline')}
                      />
                      <TrashOutline
                        className={s.icon}
                        onClick={() => console.log('TrashOutline')}
                      />
                    </div>
                  }
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </>
    ),
  },
}

export const TableCards: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeadCell>Question</TableHeadCell>
            <TableHeadCell>Answer</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Grade</TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cards.map(card => {
            return (
              <TableRow key={card.id}>
                <TableCell>{card.question}</TableCell>
                <TableCell>{card.answer}</TableCell>
                <TableCell>{new Date(card?.lastUpdated).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Rating onClick={() => {}} value={4} />
                </TableCell>
                <TableCell>
                  {
                    <div className={s.actions}>
                      <Edit2Outline
                        className={s.icon}
                        onClick={() => console.log('Edit2Outline')}
                      />
                      <TrashOutline
                        className={s.icon}
                        onClick={() => console.log('TrashOutline')}
                      />
                    </div>
                  }
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </>
    ),
  },
}
