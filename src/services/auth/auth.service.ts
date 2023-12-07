import { LoginParams, PatchUserType, User } from '@/services/auth/auth.types'
import { baseApiService } from '@/services/baseApi/base-api.service'

const authService = baseApiService.injectEndpoints({
  endpoints: builder => {
    return {
      login: builder.mutation<void, LoginParams>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/login',
        }),
      }),
      me: builder.query<User, void>({
        providesTags: ['Me'],
        query: () => `v1/auth/me`,
      }),
      patchUser: builder.mutation<User, PatchUserType>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'PATCH',
          url: '/v1/auth/me',
        }),
      }),
    }
  },
})

export const { useLoginMutation, useMeQuery, usePatchUserMutation } = authService
