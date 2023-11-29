import { TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header'
import { Page } from '@/components/ui/page'
import { Slider } from '@/components/ui/slider'
import { Table, TableBody } from '@/components/ui/table'
import { Tab } from '@/components/ui/tabs'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { AddNewPack } from '@/pages/decks/addNewPack'
import { Deck } from '@/pages/decks/deck'
import { DecksTableHeader } from '@/pages/decks/decksTableHeader'
import { useGetDecksQuery } from '@/services/decks.service'
import { DeckItem } from '@/services/flashcards.types'

import s from './decks-page.module.scss'

import foto from '../../../public/img/userPhotoForTest.png'

type Props = { deck: DeckItem }

export const DecksPage = ({ deck }: Props) => {
  const { data, error, isLoading } = useGetDecksQuery()

  if (isLoading) {
    return <Typography as={'h1'}>Loading</Typography>
  }
  if (error) {
    return <Typography as={'h1'}>Error</Typography>
  }

  const tabs = [{ title: 'My Cards' }, { title: 'All Cards' }]

  return (
    <Page>
      <Header isLogin userPhoto={foto} />
      <div className={s.deck}>
        <div className={`${s.deck__box} deck__box`}>
          <div className={s.deck__header}>
            <Typography className={s.deck__title}>Packs list</Typography>
            <AddNewPack />
          </div>
          <div className={s.deck__navigation}>
            <TextField />
            <Tab tabs={tabs} />
            <Slider value={[0, 20]} />
            <Button variant={'secondary'}>
              <TrashOutline />
              <div>Clear Filter</div>
            </Button>
          </div>
          <div className={s.deck__table}>
            <Table>
              <DecksTableHeader />
              <TableBody>{data?.items.map(deck => <Deck deck={deck} key={deck.id} />)}</TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Page>
  )
}
