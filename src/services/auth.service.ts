import { LoginParams, LoginResponse } from '@/services/auth.types'
import { baseApi } from '@/services/base-api'
import { GetAuthMe } from '@/services/flashcards.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<GetAuthMe, void>({
        query: () => `v1/auth/me`,
      }),
        login: builder.mutation<LoginResponse, LoginParams>({
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
    }
  },
})

export const { useMeQuery,useLoginMutation } = decksService