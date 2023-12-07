import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Loader } from '@/components/ui/loading/loader'
import { CardsPage } from '@/pages/cards/cards-page'
import { CheckEmailFormPage } from '@/pages/checkEmailForm-page'
import { DecksPage } from '@/pages/decks-page/decks-page'
import { ForgotPasswordPage } from '@/pages/forgotPassword-page'
import { LearnCard } from '@/pages/learnCard/learnCard'
import { ProfilePage } from '@/pages/profile'
import { SignInPage } from '@/pages/sign-in-page'
import { SignUpPage } from '@/pages/sign-up-page'
import { useMeQuery } from '@/services/auth/auth.service'

const publicRouters: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/login',
  },
  {
    element: <SignUpPage />,
    path: '/sing-up',
  },
  {
    element: <ForgotPasswordPage />,
    path: '/password-recovery',
  },
  {
    element: <CheckEmailFormPage />,
    path: '/check-email',
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: '/',
  },
  {
    element: <ProfilePage />,
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
    element: <PrivateAppRoutes />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}

function PrivateAppRoutes() {
  const { isError, isLoading } = useMeQuery()

  if (isLoading) {
    return <Loader />
  }
  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
