import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal/modal'
import { Select } from '@/components/ui/select'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { useMeQuery } from '@/services/auth.service'
import { useCreateCardMutation, useGetCardsQuery } from '@/services/cards.service'
import { useGetDeckByIdQuery } from '@/services/decks.service'
import { BackToPacksList } from '@/utils/backToPack'

import s from '@/components/ui/modal/modal.module.scss'

export const CardsSortHeader = () => {
  const { id } = useParams()

  const { data: dataThisDeck } = useGetDeckByIdQuery({ id: id ? id : '' })
  const { data } = useGetCardsQuery({ id: id ? id : '' })
  const { data: meData } = useMeQuery()
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [createCard] = useCreateCardMutation()

  return (
    <div>
      <BackToPacksList />
      <Typography as={'h2'} variant={'h2'}>
        {dataThisDeck?.name}
      </Typography>
      {/* eslint-disable-next-line no-nested-ternary */}
      {meData?.id === dataThisDeck?.userId ? (
        <Modal title={'Add New Card'} trigger={<Button>Add New Card</Button>}>
          <div className={s.contentWrapper}>
            <div className={s.contentBody}>
              <Select label={'Choose a question format'} placeholder={'Text'} />
              <TextField
                label={'Question'}
                onValueChange={setQuestion}
                placeholder={'How "This" works in JavaScript?'}
                value={question}
              />
              <TextField
                label={'Answer'}
                onValueChange={setAnswer}
                placeholder={'This is how "This" works in JavaScript'}
                type={'default'}
                value={answer}
              />
            </div>
            <div className={s.buttons}>
              <Button variant={'secondary'}>Cancel</Button>
              <Button onClick={() => createCard({ answer, id, question })} variant={'primary'}>
                Add New Card
              </Button>
            </div>
          </div>
        </Modal>
      ) : data?.items.length ? (
        <Button>
          <Link to={`/learn/${dataThisDeck?.id}`}>Learn to Pack</Link>
        </Button>
      ) : (
        ''
      )}
      <TextField type={'search'} />
    </div>
  )
}
