import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import {
  useCreateDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
} from '@/services/decks.service'

export const Decks = () => {
  const { data, error, isLoading } = useGetDecksQuery()
  const { data: deckById } = useGetDeckByIdQuery({ id: 'clpgfu8fh054cwv2qx449vy3g' })
  const [createDeck, { isLoading: isDeckBeingCreated }] = useCreateDeckMutation()
  const [value, setValue] = useState('')

  if (isLoading) {
    return <Typography as={'h1'}>Loading</Typography>
  }
  if (error) {
    return <Typography as={'h1'}>Error</Typography>
  }

  return (
    <div>
      <TextField onValueChange={e => setValue(e)} value={value} />
      <Button onClick={() => createDeck({ name: value })}>Create Deck</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Updated</TableHeadCell>
            <TableHeadCell>Author</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items.map(deck => {
            return (
              <TableRow key={deck.id}>
                <TableCell>{deck?.name}</TableCell>
                <TableCell>{deck?.cardsCount}</TableCell>
                <TableCell>{new Date(deck?.updated).toLocaleDateString()}</TableCell>
                <TableCell>{deck?.author.name}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
