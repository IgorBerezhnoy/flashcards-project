import { Link, useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { useMeQuery } from '@/services/auth.service'
import { useCreateCardMutation, useGetCardsQuery } from '@/services/cards.service'
import { useGetDeckByIdQuery } from '@/services/decks.service'
import { BackToPacksList } from '@/utils/backToPack'

export const CardsSortHeader = () => {
  const { id } = useParams()

  const { data: dataThisDeck } = useGetDeckByIdQuery({ id: id ? id : '' })
  const { data } = useGetCardsQuery({ id: id ? id : '' })
  const { data: meData } = useMeQuery()
  const [createCard] = useCreateCardMutation()

  return (
    <div>
      <BackToPacksList />
      <Typography as={'h2'} variant={'h2'}>
        {dataThisDeck?.name}
      </Typography>
      {meData?.id === dataThisDeck?.userId ? (
        <Button>Add New Card</Button>
      ) : data?.items.length ? (
        <Button>
          <Link to={`/learn/${dataThisDeck?.id}`}>Learn to Pack</Link>
        </Button>
      ) : (
        ''
      )}
      <TextField type={'search'} />
    </div>
  )
}
