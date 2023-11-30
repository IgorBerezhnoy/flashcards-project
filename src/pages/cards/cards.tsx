import { Link, useParams } from 'react-router-dom'

import { Edit2Outline, TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Rating } from '@/components/ui/rating'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { useGetCardsQuery, useGetDeckByIdQuery } from '@/services/decks.service'

export const Cards = () => {
  /*TODO Не трогать идёт работа*/
  const { id } = useParams()
  const { data, error, isLoading } = useGetCardsQuery({ id: id ? id : '' })
  const { data: dataThisDeck } = useGetDeckByIdQuery({ id: id ? id : '' })

  if (isLoading) {
    return <Typography as={'h1'}>Loading</Typography>
  }
  if (error) {
    return <Typography as={'h1'}>Error</Typography>
  }

  return (
    <>
      <div>
        <Link to={'/'}>Back to Packs List</Link>
      </div>
      <div>
        <Typography as={'h2'} variant={'h2'}>
          {dataThisDeck?.name}
        </Typography>
        <TextField type={'search'} />
      </div>
      {data?.items.length ? (
        <>
          <Button>
            <Link to={`/learn/${dataThisDeck?.id}`}>Learn to Pack</Link>
          </Button>
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
        </>
      ) : (
        <Typography>Can't find any pack of cards </Typography>
      )}
    </>
  )
}
/*TODO Не трогать идёт работа*/
