import { baseApiService } from '@/services/baseApi/base-api.service'
import {
  CreateDeckArgs,
  DeckItem,
  GetDecksArgs,
  GetDecksResponse,
  LearnCardsResponse,
  PatchDeckByIdArg,
} from '@/services/decks/decks.types'

const decksService = baseApiService.injectEndpoints({
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
      deleteDeck: builder.mutation<void, string>({
        invalidatesTags: ['Decks'],
        query: id => ({
          method: 'DELETE',
          url: `v1/decks/${id}`,
        }),
      }),
      getDeckById: builder.query<DeckItem, string>({
        providesTags: ['Deck'],

        query: id => `v1/decks/${id}`,
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? {},
          url: `v1/decks`,
        }),
      }),
      learnCards: builder.query<LearnCardsResponse, string>({
        query: id => `v1/decks/${id}/learn`,
      }),
      patchDeck: builder.mutation<void, PatchDeckByIdArg>({
        invalidatesTags: ['Decks', 'Deck'],
        //TODO Не трогать
        onQueryStarted: async ({ id, ...body }, { dispatch, getState }) => {
          const state = getState()

          dispatch(decksService.util.updateQueryData('getDecks'))
          await queryFulfilled
        },
        query: ({ id, ...body }) => ({
          body,
          method: 'PATCH',
          url: `v1/decks/${id}`,
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
  useLearnCardsQuery,
  usePatchDeckMutation,
} = decksService
