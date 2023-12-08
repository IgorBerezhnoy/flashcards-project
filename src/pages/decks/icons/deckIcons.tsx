import { Link } from 'react-router-dom'

import { PlayCircleOutline } from '@/assets'
import { TableCell } from '@/components/ui/table'
import { DeleteDeckIcon } from '@/pages/decks/icons/deleteDeckIcon'
import { EditDeckIcon } from '@/pages/decks/icons/editDeckIcon'
import { useMeQuery } from '@/services/auth/auth.service'
import { DeckItem } from '@/services/decks/decks.types'

import s from '@/components/ui/table/table.module.scss'

type Props = { deck: DeckItem }
export const DeckIcons = ({ deck }: Props) => {
  const { data } = useMeQuery()

  return (
    <TableCell className={s.iconBody}>
      <div className={s.iconBlock}>
        <Link className={s.iconLearn} to={`learn/${deck.id}`}>
          <PlayCircleOutline className={s.icon} />
        </Link>
        {data?.id === deck.author.id && <EditDeckIcon id={deck.id} />}
        {data?.id === deck.author.id && <DeleteDeckIcon id={deck.id} />}
      </div>
    </TableCell>
  )
}
