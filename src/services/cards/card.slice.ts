import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type CurrentCardStateType = typeof initialState

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
    setCurrentCard: (state, action: PayloadAction<CurrentCardStateType>) => {
      state.currentCard = action.payload.currentCard
    },
  },
})

export const currentCardSlice = slice.reducer
export const currentCardActions = slice.actions
export type CurrentType = {
  answer: {
    img: string | undefined
    text: string | undefined
  }
  question: {
    img: string | undefined
    text: string | undefined
  }
  shots: number | string | undefined
}
