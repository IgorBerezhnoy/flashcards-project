import { baseApi } from '@/services/base-api'
import { CreateCard, CreateCardResponseType, GetCardsResponse } from '@/services/flashcards.types'

const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<CreateCardResponseType, CreateCard>({
        invalidatesTags: ['Cards'],
        query: args => ({
          body: { answer: args.answer, question: args.question },
          method: 'POST',
          url: `v1/decks/${args.id}/cards`,
        }),
      }),
      deleteCard: builder.mutation<void, { id: string }>({
        invalidatesTags: ['Cards'],
        query: args => ({
          method: 'DELETE',
          url: `v1/cards/${args.id}`,
        }),
      }),
      getCards: builder.query<GetCardsResponse, { id: string }>({
        providesTags: ['Cards'],
        query: id => `v1/decks/${id.id}/cards`,
      }),
      patchCard: builder.mutation<CreateCardResponseType, CreateCard>({
        invalidatesTags: ['Cards'],
        query: args => ({
          body: { answer: args.answer, question: args.question },
          method: 'PATCH',
          url: `v1/cards/${args.id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardsQuery,
  usePatchCardMutation,
} = cardsService
