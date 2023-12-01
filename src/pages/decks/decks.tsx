import { Table, TableBody, TableHeader } from '@/components/ui/table'
import { Deck } from '@/pages/decks/deck'

export const Decks = ({ data, setSort, sort }: any) => {
  const columns = [
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'cardsCount',
      title: 'Cards',
    },
    {
      key: 'updated',
      title: 'Last Updated',
    },
    {
      key: 'createdBy',
      title: 'Created by',
    },
  ]

  return (
    <div>
      <Table>
        <TableHeader columns={columns} onSort={setSort} sort={sort} />
        <TableBody>{data?.items.map((deck: any) => <Deck deck={deck} key={deck.id} />)}</TableBody>
      </Table>
    </div>
  )
}
