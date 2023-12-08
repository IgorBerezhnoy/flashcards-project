import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { Decks } from '@/components/layout/decks/decks'
import { Loader } from '@/components/ui'
import { Pagination } from '@/components/ui/pagination'
import { Sort } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { useActions } from '@/hooks'
import { AddNewCard } from '@/pages/modal/addNewCard'
import { EditPack } from '@/pages/modal/editPack'
import { useGetMeQuerySate } from '@/services/auth/auth.service'
import { useGetDecksQuery } from '@/services/decks/decks.service'
import { SortParamsTypeObj, sortParamsActions } from '@/services/decks/decks.slice'
import { RootState } from '@/services/store'

import s from './decks-page.module.scss'

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
  } = useSelector<RootState, SortParamsTypeObj>(state => state.decks.sortParams)
  const { data: meData } = useGetMeQuerySate()
  const sortedString = useMemo(() => {
    if (!sort) {
      return null
    }

    return `${sort.key}-${sort.direction}`
  }, [sort])

  const {
    currentData: currentDecksData,
    data: deckData,
    isError,
    isLoading,
  } = useGetDecksQuery({
    authorId: activeTab,
    currentPage: page,
    itemsPerPage: selectedCount,
    maxCardsCount: sliderValue[1],
    minCardsCount: sliderValue[0],
    name: nameDeck,
    orderBy: sortedString as Sort,
  })

  const data = currentDecksData ?? deckData

  if (isLoading) {
    return <Loader />
  }
  if (isError || !data) {
    return <Typography as={'h1'}>Error</Typography>
  }

  return (
    <div className={s.deck}>
      <div className={`${s.deck__box} deck__box`}>
        <DesksSortHeader
          activeTab={activeTab}
          data={data} // Исправить
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
            totalCount={data.pagination.totalItems}
          />
        </div>
        <AddNewCard />
        <EditPack />
      </div>
    </div>
  )
}
//
