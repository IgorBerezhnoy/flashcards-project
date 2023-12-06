import { Sort } from '@/components/ui/table'

export interface GetDecksResponse {
  items: DeckItem[]
  maxCardsCount: number
  pagination: GetDecksResponsePagination
}

export type CreateDeckArgs = {
  cover?: string
  isPrivate?: boolean
  name: string
}

export type PatchDeckByIdArg = {
  cover?: string
  id: string
  isPrivate: boolean
  name: string
}
export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: Sort
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

export interface DeckItem {
  author: GetDecksResponseItemsAuthor
  cardsCount: number
  cover?: any
  created: string
  id: string
  isBlocked?: boolean | null
  isDeleted?: boolean | null
  isPrivate: boolean
  name: string
  rating: number
  shots: number
  updated: string
  userId: string
}

export interface LearnCardsResponse {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  id: string
  question: string
  questionImg: string
  questionVideo: string
  rating: number
  shots: number
  updated: string
  userId: string
}
