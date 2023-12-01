import { Link, useParams } from 'react-router-dom'

import { Edit2Outline, MoreVerticalOutline, PlayCircleOutline, TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { DropDownItem, DropdownMenu, DropdownSeparator } from '@/components/ui/dropdownMenu'
import { Modal } from '@/components/ui/modal/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { AddNewCard } from '@/pages/cards/add-new-card'
import { useMeQuery } from '@/services/auth.service'
import { useGetCardsQuery } from '@/services/cards.service'
import { useDeleteDeckMutation, useGetDeckByIdQuery } from '@/services/decks.service'
import { BackToPacksList } from '@/utils/backToPack'

import s from './cards-page.module.scss'

export const CardsSortHeader = () => {
  const { id } = useParams()

  const { data: dataThisDeck } = useGetDeckByIdQuery({ id: id ? id : '' })
  const { data } = useGetCardsQuery({ id: id ? id : '' })
  const { data: meData } = useMeQuery()
  const [deleteDeck] = useDeleteDeckMutation()

  return (
    <div className={s.cards__conteiner}>
      <div className={s.cards__backTo}>
        <BackToPacksList />
      </div>
      <div className={s.cards__navigation}>
        <div className={s.cards__title}>
          <Typography as={'h2'} variant={'h2'}>
            {dataThisDeck?.name}
          </Typography>
          <DropdownMenu trigger={<MoreVerticalOutline />}>
            <div>
              <div>
                <DropDownItem asChild>
                  <Link to={`/learn/${dataThisDeck?.id}`}>
                    {' '}
                    <Typography as={'div'} className={s.dropdownMenuItem} variant={'caption'}>
                      <PlayCircleOutline className={s.icons} />
                      Learn
                    </Typography>
                  </Link>
                </DropDownItem>
                <DropdownSeparator />
                <DropDownItem>
                  <Typography as={'div'} className={s.dropdownMenuItem} variant={'caption'}>
                    <Edit2Outline className={s.icons} />
                    Edit
                  </Typography>
                </DropDownItem>{' '}
                <DropdownSeparator />
                <DropDownItem>
                  <Modal
                    trigger={
                      <Typography as={'div'} className={s.dropdownMenuItem} variant={'caption'}>
                        <TrashOutline className={s.icons} />
                        Delete
                      </Typography>
                    }
                  >
                    <div className={s.contentWrapper}>
                      <div className={s.contentDeleteBody}>
                        <Typography as={'div'}>
                          Do you really want to remove <span>Pack Name</span>?
                        </Typography>
                        <Typography as={'div'}>All cards will be deleted.</Typography>
                      </div>
                      <div className={s.buttons}>
                        <Button variant={'secondary'}>Cancel</Button>
                        <Button onClick={() => deleteDeck({ id: id ?? '' })} variant={'primary'}>
                          Delete Pack
                        </Button>
                      </div>
                    </div>
                  </Modal>
                </DropDownItem>
              </div>
            </div>
          </DropdownMenu>
        </div>
        {/* eslint-disable-next-line no-nested-ternary */}
        {meData?.id === dataThisDeck?.userId ? (
          <Modal title={'Add New Card'} trigger={<Button>Add New Card</Button>}>
            <AddNewCard />
          </Modal>
        ) : data?.items.length ? (
          <Button>
            <Link to={`/learn/${dataThisDeck?.id}`}>Learn to Pack</Link>
          </Button>
        ) : (
          ''
        )}
      </div>
      <div className={s.cards__search}>
        <TextField type={'search'} />
      </div>
    </div>
  )
}
