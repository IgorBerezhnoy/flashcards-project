import { useParams } from 'react-router-dom'

import { DeleteCardIcon } from '@/pages/cards/delete-card-icon'
import { EditCardIcon } from '@/pages/cards/edit-card-icon'
import { useMeQuery } from '@/services/auth.service'
import { useGetDeckByIdQuery } from '@/services/decks.service'
import { RootObjectItems } from '@/services/flashcards.types'

export const CardsIcons = ({ card }: { card: RootObjectItems }) => {
  const { id } = useParams()

  const { data: meData } = useMeQuery()
  const { data: dataThisDeck } = useGetDeckByIdQuery({ id: id ? id : '' })

  return (
    <div>
      {meData?.id === dataThisDeck?.userId && <EditCardIcon id={card.id} />}
      {meData?.id === dataThisDeck?.userId && <DeleteCardIcon id={card.id} />}
    </div>
  )
}
