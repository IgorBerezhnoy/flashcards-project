import { Table, TableBody } from '@/components/ui/table'
import { Deck } from '@/pages/decks/deck'
import { DecksTableHeader } from '@/pages/decks/decksTableHeader'

export const Decks = ({ data }: any) => {
  // const { data, error, isLoading } = useGetDecksQuery()
  //
  // if (isLoading) {
  //   return <Typography as={'h1'}>Loading</Typography>
  // }
  // if (error) {
  //   return <Typography as={'h1'}>Error</Typography>
  // }

  return (
    <div>
      <Table>
        <DecksTableHeader />
        <TableBody>{data?.items.map((deck: any) => <Deck deck={deck} key={deck.id} />)}</TableBody>
      </Table>
    </div>
  )
}
