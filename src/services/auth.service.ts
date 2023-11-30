import { LoginParams, LoginResponse } from '@/services/auth.types'
import { baseApi } from '@/services/base-api'
import { GetAuthMe } from '@/services/flashcards.types'

const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<LoginResponse, LoginParams>({
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      me: builder.query<GetAuthMe, void>({
        query: () => `v1/auth/me`,
      }),
    }
  },
})

export const { useLoginMutation, useMeQuery } = authService
