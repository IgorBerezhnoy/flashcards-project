import { Sort } from '@/components/ui/table'

export interface GetCardsResponse {
  items: CardType[]
  pagination: RootObjectPagination
}

export interface GetCardsPayload {
  id: string
  orderBy?: Sort
}

export interface CardType {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  rating: number
  shots: number
  updated: string
  userId: string
}

export interface RootObjectPagination {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type PatchCard = CreateCard & { deckId: string }
export type CreateCard = {
  answer: string
  answerImg?: string
  answerVideo?: string
  id: string
  question: string
  questionImg?: string
  questionVideo?: string
}
