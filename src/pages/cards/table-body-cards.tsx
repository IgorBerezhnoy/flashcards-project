import { useParams } from 'react-router-dom'

import { Edit2Outline, TrashOutline } from '@/assets'
import { Rating } from '@/components/ui/rating'
import { TableBody, TableCell, TableRow } from '@/components/ui/table'
import { useMeQuery } from '@/services/auth.service'
import { useGetCardsQuery, useGetDeckByIdQuery } from '@/services/decks.service'

export const TableBodyCards = () => {
  const { id } = useParams()
  const { data } = useGetCardsQuery({ id: id ? id : '' })
  const { data: meData } = useMeQuery()
  const { data: dataThisDeck } = useGetDeckByIdQuery({ id: id ? id : '' })

  return (
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
                  {meData?.id === dataThisDeck?.author?.id && (
                    <Edit2Outline onClick={() => console.log('Edit2Outline')} />
                  )}
                  {meData?.id === dataThisDeck?.author?.id && (
                    <TrashOutline onClick={() => console.log('TrashOutline')} />
                  )}
                </div>
              }
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}
