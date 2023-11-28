import { TableHead, TableHeadCell, TableRow } from '@/components/ui/table'

export const DecksTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableHeadCell>Name</TableHeadCell>
        <TableHeadCell>Cards</TableHeadCell>
        <TableHeadCell>Updated</TableHeadCell>
        <TableHeadCell>Author</TableHeadCell>
      </TableRow>
    </TableHead>
  )
}
