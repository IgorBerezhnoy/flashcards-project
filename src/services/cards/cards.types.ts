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
