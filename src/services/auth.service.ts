import { baseApi } from '@/services/base-api'
import { GetAuthMe } from '@/services/flashcards.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<GetAuthMe, void>({
        query: () => `v1/auth/me`,
      }),
    }
  },
})

export const { useMeQuery } = decksService
