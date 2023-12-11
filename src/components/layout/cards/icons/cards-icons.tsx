import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { DeleteCardIcon } from '@/components/layout/cards/icons/delete-card-icon'
import { EditCardIcon } from '@/components/layout/cards/icons/edit-card-icon'
import { useMeQuery } from '@/services/auth/auth.service'
import { CardType } from '@/services/cards/cards.types'
import { useGetDeckByIdQuery } from '@/services/decks/decks.service'
import { ErrorType } from '@/services/decks/decks.types'

import s from '@/components/layout/decks/decks.module.scss'

export const CardsIcons = ({ card }: { card: CardType }) => {
  const { id } = useParams()

  const { data: meData } = useMeQuery()
  const { data: dataThisDeck, error, isError } = useGetDeckByIdQuery(id ?? '')

  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message)
  }

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
