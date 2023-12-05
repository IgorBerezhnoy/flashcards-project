import { baseQueryWithReauth } from '@/services/baseApi/base-qwery-with-reauth.'
import { createApi } from '@reduxjs/toolkit/query/react'

export const baseApiService = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApiService',
  refetchOnFocus: true,
  tagTypes: ['Decks', 'Deck', 'Cards', 'Me'],
})
