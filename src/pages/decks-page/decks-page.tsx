import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { Header } from '@/components/ui/header'
import { Page } from '@/components/ui/page'
import { Pagination } from '@/components/ui/pagination'
import { Typography } from '@/components/ui/typography'
import { useActions } from '@/hooks'
import { Decks } from '@/pages/decks/decks'
import { useMeQuery } from '@/services/auth.service'
import { useGetDecksQuery } from '@/services/decks.service'
import { RootState } from '@/services/store'

import s from './decks-page.module.scss'

import { SortParamsTypeObj, sortParamsActions } from '../../services/decksSortParams.slice'
import { DesksSortHeader } from './desks-sort-header'

export const DecksPage = () => {
  const {
    setActiveTab,
    setLocalNameDeck,
    setLocalSliderValue,
    setNameDeck,
    setPage,
    setSelectedCount,
    setSliderValue,
    setSort,
  } = useActions(sortParamsActions)
  const {
    activeTab,
    localNameDeck,
    localSliderValue,
    nameDeck,
    page,
    selectedCount,
    sliderValue,
    sort,
  } = useSelector<RootState, SortParamsTypeObj>(state => state.sortParams.sortParams)
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
    name: nameDeck,
    orderBy: sortedString,
  })

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
            localValue={localNameDeck}
            setActiveTab={setActiveTab}
            setLocalSliderValue={setLocalSliderValue}
            setLocalValue={setLocalNameDeck}
            setPage={setPage}
            setSelectedCount={setSelectedCount}
            setSort={setSort}
            setValue={setNameDeck}
            setValueSlide={setSliderValue}
            sliderValue={sliderValue}
            userId={meData?.id}
          />
          <div className={s.deck__table}>
            <Decks data={data} setSort={setSort} sort={sort} />
          </div>
          <div className={s.deck__pagination}>
            <Pagination
              onChange={setPage}
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
//
