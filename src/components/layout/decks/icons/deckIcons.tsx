import { Link } from 'react-router-dom'

import { PlayCircleOutline } from '@/assets'
import { DeleteDeckIcon } from '@/components/layout/decks/icons/deleteDeckIcon'
import { EditDeckIcon } from '@/components/layout/decks/icons/editDeckIcon'
import { TableCell } from '@/components/ui/table'
import { useMeQuery } from '@/services/auth/auth.service'
import { DeckItem } from '@/services/decks/decks.types'

import s from './../decks.module.scss'

type Props = { deck: DeckItem }
export const DeckIcons = ({ deck }: Props) => {
  const { data } = useMeQuery()

  return (
    <TableCell className={s.iconBody}>
      <div className={s.iconBlock}>
        <Link className={s.iconLearn} to={`learn/${deck.id}`}>
          <PlayCircleOutline className={s.icon} />
        </Link>
        {data?.id === deck.author.id && <EditDeckIcon className={s.icon} id={deck.id} />}
        {data?.id === deck.author.id && <DeleteDeckIcon className={s.icon} id={deck.id} />}
      </div>
    </TableCell>
  )
}
