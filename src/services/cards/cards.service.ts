import { baseApiService } from '@/services/baseApi/base-api.service'
import { CreateCard, CreateCardResponseType, GetCardsResponse } from '@/services/cards/cards.types'

const cardsService = baseApiService.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<CreateCardResponseType, CreateCard>({
        invalidatesTags: ['Cards'],
        query: ({ id, ...body }) => ({
          body,
          method: 'POST',
          url: `v1/decks/${id}/cards`,
        }),
      }),
      deleteCard: builder.mutation<void, string>({
        invalidatesTags: ['Cards'],
        query: id => ({
          method: 'DELETE',
          url: `v1/cards/${id}`,
        }),
      }),
      getCards: builder.query<GetCardsResponse, string>({
        providesTags: ['Cards'],
        query: id => `v1/decks/${id}/cards`,
      }),
      patchCard: builder.mutation<CreateCardResponseType, CreateCard>({
        invalidatesTags: ['Cards'],
        query: ({ id, ...body }) => ({
          body,
          method: 'PATCH',
          url: `v1/cards/${id}`,
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
