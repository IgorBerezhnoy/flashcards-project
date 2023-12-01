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
    element: (
      <div>
        <h1>profile</h1>
        Я не работаю <br />
        Саня сделай меня
        <img src={'https://i.imgur.com/1Kqs7Ui.jpg'} width={800} />
      </div>
    ),
    path: '/profile',
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

// TODO решить вопрос с isAuthenticated, нужен ли тут токен
function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
