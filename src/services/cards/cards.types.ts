import { Sort } from '@/components/ui/table'

export interface GetCardsResponse {
  items: RootObjectItems[]
  pagination: RootObjectPagination
}

export interface GetCardsPayload {
  id: string
  orderBy?: Sort
}

export interface RootObjectItems {
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

export type CreateCard = {
  answer: string
  answerImg?: string
  answerVideo?: string
  id: string
  question: string
  questionImg?: string
  questionVideo?: string
}
export type CreateCardResponseType = {
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
