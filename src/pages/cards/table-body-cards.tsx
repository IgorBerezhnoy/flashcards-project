import { useParams } from 'react-router-dom'

import { Rating } from '@/components/ui/rating'
import { TableBody, TableCell, TableRow } from '@/components/ui/table'
import { CardsIcons } from '@/pages/cards/icons/cards-icons'
import { useGetCardsQuery } from '@/services/cards/cards.service'

export const TableBodyCards = () => {
  const { id } = useParams()
  const { data } = useGetCardsQuery({ id: id ? id : '' })

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
              <CardsIcons card={card} />
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )
}
