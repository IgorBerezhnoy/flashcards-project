import { LoginParams, PatchUserType, SingUpFormData, User } from '@/services/auth/auth.types'
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
      logout: builder.mutation<void, void>({
        invalidatesTags: ['Me'],
        query: () => ({
          method: 'POST',
          url: '/v1/auth/logout',
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
      singUp: builder.mutation<User, SingUpFormData>({
        invalidatesTags: ['Me'],
        query: body => ({
          body,
          method: 'POST',
          url: '/v1/auth/sign-up',
        }),
      }),
    }
  },
})

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  usePatchUserMutation,
  useSingUpMutation,
} = authService
