import { Link } from 'react-router-dom'

import { TableCell, TableRow } from '@/components/ui/table'
import { DeckIcons } from '@/pages/decks/icons/deckIcons'
import { DeckItem } from '@/services/flashcards.types'

type Props = { deck: DeckItem }
export const Deck = ({ deck }: Props) => {
  return (
    <>
      <TableRow key={deck.id}>
        <TableCell>
          <Link to={`decks/cards/${deck.id}`}>{deck?.name}</Link>
        </TableCell>
        <TableCell>{deck?.cardsCount}</TableCell>
        <TableCell>{new Date(deck?.updated).toLocaleDateString()}</TableCell>
        <TableCell>{deck?.author.name}</TableCell>
        <DeckIcons deck={deck} />
      </TableRow>
    </>
  )
}
