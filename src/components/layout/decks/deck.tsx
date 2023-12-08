import { Link } from 'react-router-dom'

import { DeckIcons } from '@/components/layout/decks/icons/deckIcons'
import { TableCell, TableRow } from '@/components/ui/table'
import { DeckItem } from '@/services/decks/decks.types'

type Props = { deck: DeckItem }
export const Deck = ({ deck }: Props) => {
  return (
    <>
      <TableRow key={deck.id}>
        <TableCell>
          {deck?.cover && <img alt={'picture of this card'} height={50} src={deck?.cover} />}
          <Link className={'link'} to={`decks/cards/${deck.id}`}>
            {deck?.name}
          </Link>
        </TableCell>
        <TableCell>{deck?.cardsCount}</TableCell>
        <TableCell>{new Date(deck?.updated).toLocaleDateString()}</TableCell>
        <TableCell>{deck?.author.name}</TableCell>
        <DeckIcons deck={deck} />
      </TableRow>
    </>
  )
}
