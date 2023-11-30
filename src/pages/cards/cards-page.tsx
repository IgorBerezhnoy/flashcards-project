import { useParams } from 'react-router-dom'

import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { CardsSortHeader } from '@/pages/cards/cards-sort-header'
import { CardsTableHeader } from '@/pages/cards/cards-table-header'
import { TableBodyCards } from '@/pages/cards/table-body-cards'
import { useGetCardsQuery } from '@/services/decks.service'

export const CardsPage = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useGetCardsQuery({ id: id ? id : '' })

  if (isLoading) {
    return <Typography as={'h1'}>Loading</Typography>
  }
  if (error) {
    return <Typography as={'h1'}>Error</Typography>
  }

  return (
    <>
      <CardsSortHeader />
      <div>
        {data?.items.length ? (
          <Table>
            <CardsTableHeader />
            <TableBodyCards />
          </Table>
        ) : (
          <Typography>{"Can't find any pack of cards "}</Typography>
        )}
      </div>
    </>
  )
}
