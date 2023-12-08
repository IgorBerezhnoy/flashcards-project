import { Link } from 'react-router-dom'

import { DeckIcons } from '@/components/layout/decks/icons/deckIcons'
import { TableCell, TableRow } from '@/components/ui/table'
import { DeckItem } from '@/services/decks/decks.types'

import s from './decks.module.scss'
type Props = { deck: DeckItem }
export const Deck = ({ deck }: Props) => {
  return (
    <>
      <TableRow key={deck.id}>
        <TableCell>
          <div className={s.imgAndName}>
            {deck?.cover && (
              <img alt={'picture of this card'} className={s.img} src={deck?.cover} />
            )}
            <Link className={'link'} to={`decks/cards/${deck.id}`}>
              {deck?.name}
            </Link>
          </div>
        </TableCell>
        <TableCell>{deck?.cardsCount}</TableCell>
        <TableCell>{new Date(deck?.updated).toLocaleDateString()}</TableCell>
        <TableCell>{deck?.author.name}</TableCell>
        <DeckIcons deck={deck} />
      </TableRow>
    </>
  )
}
