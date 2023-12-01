export interface GetCardsResponse {
  items: RootObjectItems[]
  pagination: RootObjectPagination
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

export type DeleteDeckByIdArg = {
  id: string
}
export type PatchDeckByIdArg = {
  cover: string
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

export interface GetAuthMe {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
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
