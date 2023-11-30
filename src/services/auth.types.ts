export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean
}

export type LoginResponse = {
  accessToken: string
}
