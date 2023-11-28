import { baseApi } from '@/services/base-api'
import {
  CreateDeckArgs,
  DeleteDeckByIdArg,
  GetDeckByIdArgs,
  GetDecksArgs,
  GetDecksResponse,
} from '@/services/flashcards.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<void, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<void, DeleteDeckByIdArg>({
        invalidatesTags: ['Decks'],
        query: id => ({
          method: 'DELETE',
          url: `v1/decks/${id.id}`,
        }),
      }),
      getDeckById: builder.query<GetDecksResponse, GetDeckByIdArgs>({
        query: id => `v1/decks/${id.id}`,
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? {},
          url: `v1/decks`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
} = decksService
