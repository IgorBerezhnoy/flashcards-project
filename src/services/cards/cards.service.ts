import { baseApiService } from '@/services/baseApi/base-api.service'
import { CardType, CreateCard, GetCardsResponse, PatchCard } from '@/services/cards/cards.types'

const cardsService = baseApiService.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<CardType, CreateCard>({
        invalidatesTags: ['Cards'],
        onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
          const res = await queryFulfilled

          dispatch(
            cardsService.util.updateQueryData('getCards', id, data => {
              debugger
              data.items.unshift(res.data)
            })
          )
        },
        query: ({ formData, id }) => ({
          body: formData,
          method: 'POST',
          url: `v1/decks/${id}/cards`,
        }),
      }),
      deleteCard: builder.mutation<void, { cardId: string; deckId: string }>({
        invalidatesTags: ['Cards'],
        onQueryStarted: async ({ cardId, deckId }, { dispatch, queryFulfilled }) => {
          debugger

          const patchResult = dispatch(
            cardsService.util.updateQueryData('getCards', deckId, data => {
              debugger
              const index = data.items.findIndex(deck => deck.id == cardId)

              if (index !== -1) {
                data.items.splice(index, 1)
              }
            })
          )

          try {
            await queryFulfilled
          } catch (error) {
            patchResult.undo()
          }
        },
        query: id => ({
          method: 'DELETE',
          url: `v1/cards/${id.cardId}`,
        }),
      }),
      getCards: builder.query<GetCardsResponse, string>({
        providesTags: ['Cards'],
        query: id => `v1/decks/${id}/cards`,
      }),
      patchCard: builder.mutation<CardType, PatchCard>({
        invalidatesTags: ['Cards'],
        onQueryStarted: async ({ deckId, id, ...body }, { dispatch, queryFulfilled }) => {
          debugger

          const patchResult = dispatch(
            cardsService.util.updateQueryData('getCards', deckId, data => {
              debugger
              const card = data.items.find(deck => deck.id == id)

              if (card) {
                Object.assign(card, { ...card, ...body })
              }
            })
          )

          try {
            await queryFulfilled
          } catch (error) {
            patchResult.undo()
          }
        },

        query: ({ deckId, id, ...body }) => ({
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
