import { baseApi } from '@/services/base-api'
import { CreateCard, CreateCardResponseType, GetCardsResponse } from '@/services/flashcards.types'

const cardsService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<CreateCardResponseType, CreateCard>({
        invalidatesTags: ['Cards'],
        query: args => ({
          body: args,
          method: 'PATCH',
          url: `v1/decks/${args.id}/cards`,
        }),
      }),
      getCards: builder.query<GetCardsResponse, { id: string }>({
        query: id => `v1/decks/${id.id}/cards`,
      }),
    }
  },
})

export const { useCreateCardMutation, useGetCardsQuery } = cardsService
