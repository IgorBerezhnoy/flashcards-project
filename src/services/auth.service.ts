import { LoginParams, LoginResponse } from '@/services/auth.types'
import { baseApi } from '@/services/base-api'

const authServices = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
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

export const { useLoginMutation } = authServices
