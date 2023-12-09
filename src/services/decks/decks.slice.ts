import { Sort } from '@/components/ui/table'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type SortParamsType = typeof initialState
export type SortParamsTypeObj = typeof initialState.sortParams
const initialState = {
  sortParams: {
    activeTab: '',
    localNameDeck: '' as string,
    localSliderValue: [0, 0] as number[],
    nameDeck: '' as string,
    page: 1 as number,
    selectedCount: 7 as number,
    sliderValue: [0, 0] as number[],
    sort: null as Sort,
  },
}
const slice = createSlice({
  initialState,
  name: 'desks',
  reducers: {
    setActiveTab: (state, action: PayloadAction<string>) => {
      state.sortParams.activeTab = action.payload
    },
    setLocalNameDeck: (state, action: PayloadAction<string>) => {
      state.sortParams.localNameDeck = action.payload
    },
    setLocalSliderValue: (state, action: PayloadAction<number[]>) => {
      state.sortParams.localSliderValue = action.payload
    },
    setNameDeck: (state, action: PayloadAction<string>) => {
      state.sortParams.nameDeck = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.sortParams.page = action.payload
    },
    setSelectedCount: (state, action: PayloadAction<number>) => {
      state.sortParams.selectedCount = action.payload
    },
    setSliderValue: (state, action: PayloadAction<number[]>) => {
      state.sortParams.sliderValue = action.payload
    },
    setSort: (state, action: PayloadAction<Sort>) => {
      state.sortParams.sort = action.payload
    },
  },
})

export const descsSlice = slice.reducer
export const sortParamsActions = slice.actions
