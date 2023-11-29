import { Table, TableHead, TableHeadCell, TableRow } from '@/components/ui/table'

export const Cards = () => {
  /*TODO Не трогать идёт работа*/
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>Question</TableHeadCell>
          <TableHeadCell>Answer</TableHeadCell>
          <TableHeadCell>Last Updated</TableHeadCell>
          <TableHeadCell>Grade</TableHeadCell>
          <TableHeadCell></TableHeadCell>
        </TableRow>
      </TableHead>
      {/*      <TableBody>
        {cards.map(card => {
          return (
            <TableRow key={card.id}>
              <TableCell>{card.question}</TableCell>
              <TableCell>{card.answer}</TableCell>
              <TableCell>{new Date(card?.lastUpdated).toLocaleDateString()}</TableCell>
              <TableCell>
                <Rating onClick={() => {}} value={4} />
              </TableCell>
              <TableCell>
                {
                  <div className={s.actions}>
                    <Edit2Outline className={s.icon} onClick={() => console.log('Edit2Outline')} />
                    <TrashOutline className={s.icon} onClick={() => console.log('TrashOutline')} />
                  </div>
                }
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>*/}
    </Table>
  )
}
/*TODO Не трогать идёт работа*/
