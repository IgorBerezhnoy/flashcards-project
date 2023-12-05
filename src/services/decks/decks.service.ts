import { baseApiService } from '@/services/baseApi/base-api.service'
import {
  CreateDeckArgs,
  DeckItem,
  DeleteDeckByIdArg,
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
      deleteDeck: builder.mutation<void, DeleteDeckByIdArg>({
        invalidatesTags: ['Decks'],
        query: id => ({
          method: 'DELETE',
          url: `v1/decks/${id.id}`,
        }),
      }),
      getDeckById: builder.query<
        DeckItem,
        {
          id: string
        }
      >({
        providesTags: ['Deck'],

        query: id => `v1/decks/${id.id}`,
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? {},
          url: `v1/decks`,
        }),
      }),
      learnCards: builder.query<
        LearnCardsResponse,
        {
          id: string
        }
      >({
        query: id => `v1/decks/${id.id}/learn`,
      }),
      patchDeck: builder.mutation<void, PatchDeckByIdArg>({
        invalidatesTags: ['Decks', 'Deck'],
        query: args => ({
          body: {
            cover: args.cover,
            isPrivate: args.isPrivate,
            name: args.name,
          },
          method: 'PATCH',
          url: `v1/decks/${args.id}`,
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
