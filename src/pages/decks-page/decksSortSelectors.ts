import { RootState } from '@/services/store'

export const selectSortParams = (state: RootState) => state.decks.sortParams
