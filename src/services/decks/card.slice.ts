import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type CurrentCardType = typeof initialState

const initialState = {
  currentCard: {
    answer: {
      img: '' as string | undefined,
      text: '' as string | undefined,
    },
    question: {
      img: '' as string | undefined,
      text: '' as string | undefined,
    },
    shots: 0 as number | string | undefined,
  },
}

const slice = createSlice({
  initialState,
  name: 'currentCard',
  reducers: {
    setCurrentCard: (state, action: PayloadAction<CurrentCardType>) => {
      state.currentCard = action.payload.currentCard
    },
  },
})

export const currentCardSlice = slice.reducer
export const currentCardActions = slice.actions
