import { LoginParams, User } from '@/services/auth/auth.types'
import { baseApi } from '@/services/baseApi/base-api'

const authService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<void, LoginParams>({
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      me: builder.query<User, void>({
        query: () => `v1/auth/me`,
      }),
    }
  },
})

export const { useLoginMutation, useMeQuery } = authService
