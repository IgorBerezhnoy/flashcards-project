import { Sort } from '@/components'

export interface GetCardsResponse {
  items: CardType[]
  pagination: RootObjectPagination
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
  formData: {
    answer: string
    answerImg?: string
    answerVideo?: string
    question: string
    questionImg?: string
    questionVideo?: string
  }

  id: string
}
export type ErrorMessages = {
  field: string
  message: string
}

export type ErrorEditCardType = {
  errorMessages: ErrorMessages[]
}

export type GetSortedCardsParams = {
  answer?: string
  currentPage?: number
  id: string
  itemsPerPage?: number
  orderBy?: Sort
  question?: string
}
