import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Pagination, Sort } from '@/components'
import { CardsSortHeader } from '@/components/layout/cards/headerCards/cards-sort-header'
import { TableBodyCards } from '@/components/layout/cards/table-body-cards'
import { Table, TableHeader } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { useGetCardsQuery } from '@/services/cards/cards.service'
import { ErrorType } from '@/services/decks/decks.types'

import s from './cards-page.module.scss'

export const CardsPage = () => {
  const { id } = useParams()

  const [sort, setSort] = useState<Sort>(null)
  const [page, setPage] = useState<number>(1)
  const [question, setQuestion] = useState<string>('')
  const [selectedCount, setSelectedCount] = useState<number>(10)
  const sortedString = useMemo(() => {
    if (!sort) {
      return null
    }

    return `${sort.key}-${sort.direction}`
  }, [sort])
  const {
    currentData: currentCardData,
    data: cardData,
    error,
    isError,
  } = useGetCardsQuery({
    currentPage: page,
    id: id ?? '',
    itemsPerPage: selectedCount,
    orderBy: sortedString as Sort,
    question,
  })
  const data = currentCardData ?? cardData

  if (isError) {
    const err = error as ErrorType

    toast.error(err?.data?.message)
  }

  const columns = [
    {
      key: 'question',
      title: 'Question',
    },
    {
      key: 'answer',
      title: 'Answer',
    },
    {
      key: 'updated',
      title: 'Last Updated',
    },
    {
      key: 'grade',
      title: 'Grade',
    },
  ]

  return (
    <div className={s.cards}>
      <div className={`${s.cards__box} cards__box`}>
        <CardsSortHeader
          itemsLength={data?.items?.length || 0}
          question={question}
          setQuestion={setQuestion}
        />
        <div>
          {data?.items.length ? (
            <Table>
              <TableHeader columns={columns} onSort={setSort} sort={sort} />
              <TableBodyCards cards={data.items} />
            </Table>
          ) : (
            <Typography>{"Can't find any pack of cards "}</Typography>
          )}
        </div>
        <div className={s.cardsPagination}>
          <Pagination
            onChange={setPage}
            page={page}
            selectedCount={selectedCount}
            setSelectedCount={setSelectedCount}
            totalCount={data?.pagination?.totalItems!}
          />
        </div>
      </div>
    </div>
  )
}
