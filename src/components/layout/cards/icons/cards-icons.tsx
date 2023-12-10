import { useParams } from 'react-router-dom'

import { DeleteCardIcon } from '@/components/layout/cards/icons/delete-card-icon'
import { EditCardIcon } from '@/components/layout/cards/icons/edit-card-icon'
import { useMeQuery } from '@/services/auth/auth.service'
import { CardType } from '@/services/cards/cards.types'
import { useGetDeckByIdQuery } from '@/services/decks/decks.service'

import s from '@/components/layout/decks/decks.module.scss'

export const CardsIcons = ({ card }: { card: CardType }) => {
  const { id } = useParams()

  const { data: meData } = useMeQuery()
  const { data: dataThisDeck } = useGetDeckByIdQuery(id ?? '')

  return (
    <div className={s.iconBlock}>
      {meData?.id === dataThisDeck?.userId && (
        <EditCardIcon className={s.icon} deckId={id ?? ''} id={card.id} />
      )}
      {meData?.id === dataThisDeck?.userId && (
        <DeleteCardIcon cardId={card.id} className={s.icon} deckId={id ?? ''} />
      )}
    </div>
  )
}
