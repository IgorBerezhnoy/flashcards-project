import { Link } from 'react-router-dom'

import { PlayCircleOutline } from '@/assets'
import { TableCell } from '@/components/ui/table'
import { DeleteDeckIcon } from '@/pages/decks/deleteDeckIcon'
import { EditDeckIcon } from '@/pages/decks/editDeckIcon'
import { DeckItem } from '@/services/flashcards.types'

import s from '@/components/ui/table/table.module.scss'

type Props = { deck: DeckItem }
export const DeckIcons = ({ deck }: Props) => {
  return (
    <TableCell>
      <Link to={`learn/${deck.id}`}>
        <PlayCircleOutline className={s.icon} />
      </Link>
      <EditDeckIcon id={deck.id} />
      <DeleteDeckIcon id={deck.id} />
    </TableCell>
  )
}
