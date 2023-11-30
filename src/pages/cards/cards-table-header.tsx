import { TableHead, TableHeadCell, TableRow } from '@/components/ui/table'

export const CardsTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableHeadCell>Question</TableHeadCell>
        <TableHeadCell>Answer</TableHeadCell>
        <TableHeadCell>Last Updated</TableHeadCell>
        <TableHeadCell>Grade</TableHeadCell>
        <TableHeadCell></TableHeadCell>
      </TableRow>
    </TableHead>
  )
}
