import { Link, useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { AddNewCard } from '@/pages/cards/headerCards/add-new-card'
import { DropdownCards } from '@/pages/cards/headerCards/dropdown-cards'
import { useMeQuery } from '@/services/auth.service'
import { useGetCardsQuery } from '@/services/cards.service'
import { useGetDeckByIdQuery } from '@/services/decks.service'
import { BackToPacksList } from '@/utils/backToPack'

import s from '../cards-page.module.scss'

export const CardsSortHeader = () => {
  const { id } = useParams()

  const { data: dataThisDeck } = useGetDeckByIdQuery({ id: id ? id : '' })
  const { data } = useGetCardsQuery({ id: id ? id : '' })
  const { data: meData } = useMeQuery()

  return (
    <div className={s.cards__conteiner}>
      <div className={s.cards__backTo}>
        <BackToPacksList />
      </div>
      <div className={s.cards__navigation}>
        <div className={s.cards__title}>
          <Typography as={'h2'} variant={'h2'}>
            {dataThisDeck?.name}
          </Typography>

          {meData?.id === dataThisDeck?.userId && <DropdownCards />}
        </div>

        {/* eslint-disable-next-line no-nested-ternary */}
        {meData?.id === dataThisDeck?.userId ? (
          <Modal title={'Add New Card'} trigger={<Button>Add New Card</Button>}>
            <AddNewCard />
          </Modal>
        ) : data?.items.length ? (
          <Button>
            <Link to={`/learn/${dataThisDeck?.id}`}>Learn to Pack</Link>
          </Button>
        ) : (
          ''
        )}
      </div>
      <div className={s.cards__search}>
        <TextField type={'search'} />
      </div>
    </div>
  )
}
