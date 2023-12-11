import { Deck } from '@/components/layout/decks/deck'
import { Sort, Table, TableBody, TableHeader } from '@/components/ui/table'
import { DeckItem } from '@/services/decks/decks.types'

type Props = {
  items: DeckItem[]
  setSort: (payload: Sort) => any
  sort: Sort
}
export const Decks = ({ items, setSort, sort }: Props) => {
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
        <TableBody>
          {items.map((deck: any) => (
            <Deck deck={deck} key={deck.id} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
