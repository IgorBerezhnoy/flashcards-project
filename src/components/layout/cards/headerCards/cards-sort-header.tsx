import { Link, useParams } from 'react-router-dom'

import { BackToPacksList } from '@/components/layout/backToPack'
import { AddNewCard } from '@/components/layout/cards/headerCards/add-new-card'
import { DropdownCards } from '@/components/layout/cards/headerCards/dropdown-cards'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuerySate } from '@/services/auth/auth.service'
import { useGetCardsQuery } from '@/services/cards/cards.service'
import { useGetDeckByIdQuery } from '@/services/decks/decks.service'

import s from '../../../../pages/cards-page/cards-page.module.scss'

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
        <>
          <div className={s.cards__title}>
            <Typography as={'h2'} className={s.title} variant={'h2'}>
              {dataThisDeck?.name}
            </Typography>

            {meData?.id === dataThisDeck?.userId && (
              <DropdownCards nameDeck={dataThisDeck?.name!} />
            )}
          </div>
        </>

        {dataThisDeck?.cover && (
          <img alt={'img this deck'} className={s.imgDeck} src={dataThisDeck.cover} />
        )}
        {/* eslint-disable-next-line no-nested-ternary */}
        {meData?.id === dataThisDeck?.userId ? (
          <AddNewCard />
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
