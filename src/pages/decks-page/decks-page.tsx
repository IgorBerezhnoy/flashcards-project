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

import foto from '../../../public/img/userPhotoForTest.png'

export const DecksPage = () => {
  const tabs = [{ title: 'My Cards' }, { title: 'All Cards' }]
  const [value, setValue] = useState<string>('')
  const [page, setPage] = useState<number>(4)
  const [selectedCount, setSelectedCount] = useState<number>(10)

  const onChange = (page: number, count: number) => {
    setPage(page)
    {
      count
    }
  }
  const [sliderValue, setValueSlide] = useState<number[]>([0, 61])
  const { data, error, isLoading } = useGetDecksQuery({
    currentPage: page,
    itemsPerPage: selectedCount,
    maxCardsCount: sliderValue[1],
    minCardsCount: sliderValue[0],
    name: value,
  })

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
            <DebouncedInput
              onChange={e => setValue(e.currentTarget.value)}
              onDebouncedChange={() => console.log(value)}
              type={'search'}
              value={value}
            />
            <Tab tabs={tabs} />
            <Slider
              defaultValue={sliderValue}
              max={data?.maxCardsCount}
              setGlobalValue={setValueSlide}
              value={sliderValue}
            />
            <Button variant={'secondary'}>
              <TrashOutline />
              <div>Clear Filter</div>
            </Button>
          </div>
          <div className={s.deck__table}>
            <Decks data={data} />
          </div>
        </div>
      </div>
      <div>
        <Pagination
          onChange={onChange}
          page={page}
          selectedCount={selectedCount}
          setSelectedCount={setSelectedCount}
          totalCount={data?.pagination.totalItems}
        />
      </div>
    </Page>
  )
}
