import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CardsSortHeader } from '@/components/layout/cards/headerCards/cards-sort-header'
import { TableBodyCards } from '@/components/layout/cards/table-body-cards'
import { Table, TableHeader } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { useGetCardsQuery } from '@/services/cards/cards.service'
import { ErrorType } from '@/services/decks/decks.types'

import s from './cards-page.module.scss'

export const CardsPage = () => {
  const { id } = useParams()
  const {
    currentData: currentCardData,
    data: cardData,
    error,
    isError,
    isLoading,
  } = useGetCardsQuery(id ?? '')
  const data = currentCardData ?? cardData

  if (isLoading) {
    return <Typography as={'h1'}>Loading</Typography>
  }
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
        <CardsSortHeader />
        <div>
          {data?.items.length ? (
            <Table>
              <TableHeader columns={columns} />
              <TableBodyCards />
            </Table>
          ) : (
            <Typography>{"Can't find any pack of cards "}</Typography>
          )}
        </div>
      </div>
    </div>
  )
}
