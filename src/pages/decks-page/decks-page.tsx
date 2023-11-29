import { TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header'
import { Page } from '@/components/ui/page'
import { Slider } from '@/components/ui/slider'
import { Tab } from '@/components/ui/tabs'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { AddNewPack } from '@/pages/decks/addNewPack'
import { Decks } from '@/pages/decks/decks'

import s from './decks-page.module.scss'

import foto from '../../../public/img/userPhotoForTest.png'

export const DecksPage = () => {
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
            <Decks />
          </div>
        </div>
      </div>
    </Page>
  )
}
