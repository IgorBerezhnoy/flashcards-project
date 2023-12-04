import { Sort } from '@/components/ui/table'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type SortParamsType = typeof initialState
const initialState = {
  activeTab: '',
  localNameDeck: '' as string,
  localSliderValue: [0, 0] as number[],
  nameDeck: '' as string,
  page: 1 as number,
  selectedCount: 10 as number,
  sliderValue: [0, 0] as number[],
  sort: null as Sort,
}
const slice = createSlice({
  initialState,
  name: 'SortParams',
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.activeTab = action.payload
    },
    setLocalNameDeck: (state, action: PayloadAction<{ name: string }>) => {
      state.localNameDeck = action.payload.name
    },
    setLocalSliderValue: (state, action: PayloadAction<{ sliderValue: number[] }>) => {
      state.localSliderValue = action.payload.sliderValue
    },
    setNameDeck: (state, action: PayloadAction<{ name: string }>) => {
      state.nameDeck = action.payload.name
    },
    setPage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action.payload.page
    },
    setSelectedCount: (state, action: PayloadAction<{ selectedCount: number }>) => {
      state.selectedCount = action.payload.selectedCount
    },
    setSliderValue: (state, action: PayloadAction<{ sliderValue: number[] }>) => {
      state.sliderValue = action.payload.sliderValue
    },
    setSort: (state, action: PayloadAction<{ sort: Sort }>) => {
      state.sort = action.payload.sort
    },
  },
})

export const sortParamsSlice = slice.reducer
export const sortParamsActions = slice.actions
