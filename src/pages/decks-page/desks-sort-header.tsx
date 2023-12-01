import { TrashOutline } from '@/assets'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Sort } from '@/components/ui/table'
import { Tab } from '@/components/ui/tabs'
import { Typography } from '@/components/ui/typography'
import { AddNewPack } from '@/pages/decks-page/addNewPack'
import { DebouncedInput } from '@/utils/debounce'

import s from '@/pages/decks-page/decks-page.module.scss'

type PropsType = {
  activeTab: string
  data: any
  localSliderValue: number[]
  localValue: string
  setActiveTab: (str: string) => void
  setLocalSliderValue: (nums: number[]) => void
  setLocalValue: (str: string) => void
  setPage: (num: number) => void
  setSelectedCount: (num: number) => void
  setSort: (sort: Sort) => void
  setValue: (str: string) => void
  setValueSlide: (nums: number[]) => void
  sliderValue: number[]
  userId: string | undefined
}
export const DesksSortHeader = (props: PropsType) => {
  const {
    activeTab,
    data,
    localSliderValue,
    localValue,
    setActiveTab,
    setLocalSliderValue,
    setLocalValue,
    setPage,
    setSelectedCount,
    setSort,
    setValue,
    setValueSlide,
    sliderValue,
    userId,
  } = props
  const tabs = [
    { title: 'My CardsPage', value: userId },
    { title: 'All CardsPage', value: '' },
  ]

  const clearSortData = () => {
    setSort(null)
    setValue('')
    setLocalValue('')
    setPage(1)
    setValueSlide([0, data?.maxCardsCount!])
    setLocalSliderValue([0, data?.maxCardsCount!])
    setSelectedCount(10)
    setActiveTab('')
  }

  return (
    <>
      <div className={s.deck__header}>
        <Typography className={s.deck__title}>Packs list</Typography>
        <AddNewPack />
      </div>
      <div className={s.deck__navigation}>
        <DebouncedInput
          clearText={() => {
            setValue('')
            setLocalValue('')
          }}
          onChange={e => setLocalValue(e.currentTarget.value)}
          onDebouncedChange={value => setValue(value)}
          type={'search'}
          value={localValue}
        />
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
        <Slider
          localSliderValue={localSliderValue}
          max={data?.maxCardsCount}
          setGlobalValue={setValueSlide}
          setLocalSliderValue={setLocalSliderValue}
          value={sliderValue}
        />
        <Button className={s.deck__btn} onClick={clearSortData} variant={'secondary'}>
          <TrashOutline className={s.deck__deleteIcon} />
          <div className={s.deck__btnText}>Clear Filter</div>
        </Button>
      </div>
    </>
  )
}
