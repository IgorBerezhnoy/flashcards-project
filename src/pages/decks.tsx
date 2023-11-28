import { useState } from 'react'

import { Edit2Outline, PlayCircleOutline, TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Modal } from '@/components/ui/modal/modal'
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
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
} from '@/services/decks.service'

import s from '@/components/ui/table/table.module.scss'

export const Decks = () => {
  const { data, error, isLoading } = useGetDecksQuery()
  const { data: deckById } = useGetDeckByIdQuery({ id: 'clpgfu8fh054cwv2qx449vy3g' })
  const [createDeck, { isLoading: isDeckBeingCreated }] = useCreateDeckMutation()
  const [deleteDeck, { isLoading: isDeckBeingDeleted }] = useDeleteDeckMutation()
  const [value, setValue] = useState('')

  if (isLoading) {
    return <Typography as={'h1'}>Loading</Typography>
  }
  if (error) {
    return <Typography as={'h1'}>Error</Typography>
  }

  return (
    <div>
      <Modal title={'Add New Pack'} trigger={<Button>Add New Pack</Button>}>
        <div className={s.contentWrapper}>
          <div className={s.contentBody}>
            <TextField onValueChange={e => setValue(e)} value={value} />
            <Checkbox label={'Private pack'} />
          </div>
          <div className={s.buttons}>
            <Button variant={'secondary'}>Cancel</Button>
            <Button onClick={() => createDeck({ name: value })} variant={'primary'}>
              Add New Pack
            </Button>
          </div>
        </div>
      </Modal>
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
                <TableCell>
                  {' '}
                  <PlayCircleOutline
                    className={s.icon}
                    onClick={() => console.log('PlayCircleOutline')}
                  />
                  <Edit2Outline className={s.icon} onClick={() => console.log('Мо')} />
                  <Modal trigger={<TrashOutline className={s.icon} />}>
                    <div className={s.contentWrapper}>
                      <div className={s.contentDeleteBody}>
                        <Typography as={'div'}>
                          Do you really want to remove <span>Pack Name</span>?
                        </Typography>
                        <Typography as={'div'}>All cards will be deleted.</Typography>
                      </div>
                      <div className={s.buttons}>
                        <Button variant={'secondary'}>Cancel</Button>
                        <Button onClick={() => deleteDeck({ id: deck.id })} variant={'primary'}>
                          Delete Pack
                        </Button>
                      </div>
                    </div>
                  </Modal>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
