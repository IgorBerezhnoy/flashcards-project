import { useState } from 'react'

import { TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header'
import { Page } from '@/components/ui/page'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { Tab } from '@/components/ui/tabs'
import { Typography } from '@/components/ui/typography'
import { AddNewPack } from '@/pages/decks/addNewPack'
import { Decks } from '@/pages/decks/decks'
import { useGetDecksQuery } from '@/services/decks.service'
import { DebouncedInput } from '@/utils/debounce'

import s from './decks-page.module.scss'

import photo from '../../../public/img/userPhotoForTest.png'

export const DecksPage = () => {
  const tabs = [{ title: 'My Cards' }, { title: 'All Cards' }]
  const [sliderValue, setValueSlide] = useState<number[]>([0, 61])
  const [localSliderValue, setLocalSliderValue] = useState(sliderValue)
  const [value, setValue] = useState<string>('')
  const [localValue, setLocalValue] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [selectedCount, setSelectedCount] = useState<number>(10)
  const { data } = useGetDecksQuery({
    currentPage: page,
    itemsPerPage: selectedCount,
    maxCardsCount: sliderValue[1],
    minCardsCount: sliderValue[0],
    name: value,
  })
  const onChange = (page: number) => {
    setPage(page)
  }
  const clearSortData = () => {
    setValue('')
    setPage(1)
    setValueSlide([0, data?.maxCardsCount!])
    setLocalSliderValue([0, data?.maxCardsCount!])
    setSelectedCount(10)
  }

  return (
    <Page>
      <Header isLogin userPhoto={photo} />
      <div className={s.deck}>
        <div className={`${s.deck__box} deck__box`}>
          <div className={s.deck__header}>
            <Typography className={s.deck__title}>Packs list</Typography>
            <AddNewPack />
          </div>
          <div className={s.deck__navigation}>
            <DebouncedInput
              onChange={e => setLocalValue(e.currentTarget.value)}
              onDebouncedChange={() => setValue(localValue)}
              type={'search'}
              value={localValue}
            />
            <Tab tabs={tabs} />
            <Slider
              localSliderValue={localSliderValue}
              max={data?.maxCardsCount}
              setGlobalValue={setValueSlide}
              setLocalSliderValue={setLocalSliderValue}
              value={sliderValue}
            />
            <Button onClick={clearSortData} variant={'secondary'}>
              <TrashOutline />
              <div>Clear Filter</div>
            </Button>
          </div>
          <div className={s.deck__table}>
            <Decks data={data} />
          </div>
          <div className={s.deck__pagination}>
            <Pagination
              onChange={onChange}
              page={page}
              selectedCount={selectedCount}
              setSelectedCount={setSelectedCount}
              totalCount={data?.pagination.totalItems!}
            />
          </div>
        </div>
      </div>
    </Page>
  )
}
