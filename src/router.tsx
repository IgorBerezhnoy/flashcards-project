import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { CardsPage } from '@/pages/cards/cards-page'
import { DecksPage } from '@/pages/decks-page/decks-page'
import { LearnCard } from '@/pages/learnCard/learnCard'
import { SignInPage } from '@/pages/sign-in-page'

const publicRouters: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/login',
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: '/',
  },

  {
    element: <CardsPage />,
    path: 'decks/cards/:id',
  },
  {
    element: <LearnCard />,
    path: 'learn/:id',
  },
]
const router = createBrowserRouter([
  ...publicRouters,
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
