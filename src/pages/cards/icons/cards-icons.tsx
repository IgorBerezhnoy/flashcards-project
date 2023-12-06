import { useParams } from 'react-router-dom'

import { DeleteCardIcon } from '@/pages/cards/icons/delete-card-icon'
import { EditCardIcon } from '@/pages/cards/icons/edit-card-icon'
import { useMeQuery } from '@/services/auth/auth.service'
import { CardType } from '@/services/cards/cards.types'
import { useGetDeckByIdQuery } from '@/services/decks/decks.service'

export const CardsIcons = ({ card }: { card: CardType }) => {
  const { id } = useParams()

  const { data: meData } = useMeQuery()
  const { data: dataThisDeck } = useGetDeckByIdQuery(id ?? '')

  return (
    <div>
      {meData?.id === dataThisDeck?.userId && <EditCardIcon deckId={id ?? ''} id={card.id} />}
      {meData?.id === dataThisDeck?.userId && <DeleteCardIcon cardId={card.id} deckId={id ?? ''} />}
    </div>
  )
}
