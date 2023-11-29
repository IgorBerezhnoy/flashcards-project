import { useParams } from 'react-router-dom'

import { Edit2Outline, TrashOutline } from '@/assets'
import { Rating } from '@/components/ui/rating'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { useGetCardsQuery } from '@/services/decks.service'

export const Cards = () => {
  /*TODO Не трогать идёт работа*/
  const { id } = useParams()
  const { data, error, isLoading } = useGetCardsQuery({ id: id ? id : '' })

  console.log(id)
  if (isLoading) {
    return <Typography as={'h1'}>Loading</Typography>
  }
  if (error) {
    return <Typography as={'h1'}>Error</Typography>
  }

  return (
    <Table>
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
        {data?.items.map(card => {
          return (
            <TableRow key={card.id}>
              <TableCell>{card.question}</TableCell>
              <TableCell>{card.answer}</TableCell>
              <TableCell>{new Date(card?.updated).toLocaleDateString()}</TableCell>
              <TableCell>
                <Rating onClick={() => {}} value={card.grade} />
              </TableCell>
              <TableCell>
                {
                  <div>
                    <Edit2Outline onClick={() => console.log('Edit2Outline')} />
                    <TrashOutline onClick={() => console.log('TrashOutline')} />
                  </div>
                }
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
/*TODO Не трогать идёт работа*/
