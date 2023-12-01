import { useMemo, useState } from 'react'

import { Header } from '@/components/ui/header'
import { Page } from '@/components/ui/page'
import { Pagination } from '@/components/ui/pagination'
import { Sort } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { Decks } from '@/pages/decks/decks'
import { DesksSortHeader } from '@/pages/decks-page/desks-sort-header'
import { useMeQuery } from '@/services/auth.service'
import { useGetDecksQuery } from '@/services/decks.service'

import s from './decks-page.module.scss'

export const DecksPage = () => {
  const [sliderValue, setValueSlide] = useState<number[]>([0, 61])
  const [localSliderValue, setLocalSliderValue] = useState(sliderValue)
  const [value, setValue] = useState<string>('')
  const [localValue, setLocalValue] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const [selectedCount, setSelectedCount] = useState<number>(10)
  const [activeTab, setActiveTab] = useState<string>('')
  const [sort, setSort] = useState<Sort>(null)

  const { data: meData } = useMeQuery()

  const sortedString = useMemo(() => {
    if (!sort) {
      return null
    }

    return `${sort.key}-${sort.direction}`
  }, [sort])

  const { data, error, isLoading } = useGetDecksQuery({
    authorId: activeTab,
    currentPage: page,
    itemsPerPage: selectedCount,
    maxCardsCount: sliderValue[1],
    minCardsCount: sliderValue[0],
    name: value,
    orderBy: sortedString,
  })
  const onChange = (page: number) => {
    setPage(page)
  }

  if (isLoading) {
    return <Typography as={'h1'}>Loading</Typography>
  }
  if (error) {
    return <Typography as={'h1'}>Error</Typography>
  }

  return (
    <Page>
      <Header
        email={meData?.email}
        isLogin={!!meData?.id}
        name={meData?.name}
        userPhoto={meData?.avatar}
      />
      <div className={s.deck}>
        <div className={`${s.deck__box} deck__box`}>
          <DesksSortHeader
            activeTab={activeTab}
            data={data}
            localSliderValue={localSliderValue}
            localValue={localValue}
            setActiveTab={setActiveTab}
            setLocalSliderValue={setLocalSliderValue}
            setLocalValue={setLocalValue}
            setPage={setPage}
            setSelectedCount={setSelectedCount}
            setSort={setSort}
            setValue={setValue}
            setValueSlide={setValueSlide}
            sliderValue={sliderValue}
            userId={meData?.id}
          />
          <div className={s.deck__table}>
            <Decks data={data} setSort={setSort} sort={sort} />
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
