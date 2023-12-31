import { baseApiService } from '@/services/baseApi/base-api.service'
import { currentCardSlice } from '@/services/cards/card.slice'
import { descsSlice } from '@/services/decks/decks.slice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApiService.middleware),
  reducer: {
    [baseApiService.reducerPath]: baseApiService.reducer,
    currentCard: currentCardSlice,
    decks: descsSlice,
  },
})

// Метод setupListeners, подключает слушатели событий фокуса (refetchOnFocus) и повторного подключения (refetchOnReconnect ),
// чтобы автоматически перезагружать данные при возвращении на страницу или восстановлении подключения
setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
