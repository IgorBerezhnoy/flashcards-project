import { Link, useParams } from 'react-router-dom'

import { BackToPacksList } from '@/components/layout/backToPack'
import { AddNewCard } from '@/components/layout/cards/headerCards/add-new-card'
import { DropdownCards } from '@/components/layout/cards/headerCards/dropdown-cards'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuerySate } from '@/services/auth/auth.service'
import { useGetCardsQuery } from '@/services/cards/cards.service'
import { useGetDeckByIdQuery } from '@/services/decks/decks.service'

import s from './../cards.module.scss'

export const CardsSortHeader = () => {
  const { id } = useParams()

  const { data: dataThisDeck } = useGetDeckByIdQuery(id ?? '')
  const { data } = useGetCardsQuery(id ?? '')
  const { data: meData } = useGetMeQuerySate()

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
            <Link className={'link'} to={`/learn/${dataThisDeck?.id}`}>
              Learn to Pack
            </Link>
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
