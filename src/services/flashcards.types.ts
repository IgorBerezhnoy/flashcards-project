export interface GetDecksResponse {
  items: GetDecksResponseItems[]
  maxCardsCount: number
  pagination: GetDecksResponsePagination
}

export type CreateDeckArgs = {
  cover?: string
  isPrivate?: boolean
  name: string
}
export type GetDeckByIdArgs = { id: string }
export type DeleteDeckByIdArg = { id: string }
export type GetDecksArgs = {
  authorId?: number
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export interface GetDecksResponsePagination {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export interface GetDecksResponseItemsAuthor {
  id: string
  name: string
}

export interface GetDecksResponseItems {
  author: GetDecksResponseItemsAuthor
  cardsCount: number
  cover?: any
  created: string
  id: string
  isBlocked?: any
  isDeleted?: any
  isPrivate: boolean
  name: string
  rating: number
  shots: number
  updated: string
  userId: string
}
