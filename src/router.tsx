import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Header } from '@/components/ui'
import { Loader } from '@/components/ui/loading/loader'
import { Page } from '@/components/ui/page'
import { CardsPage } from '@/pages/cards-page'
import { CheckEmailFormPage } from '@/pages/checkEmailForm-page'
import { DecksPage } from '@/pages/decks-page/decks-page'
import { ForgotPasswordPage } from '@/pages/forgotPassword-page'
import { LearnCardPage } from '@/pages/learnCard-page/learnCard-Page'
import { NotFoundPage } from '@/pages/not-found-page'
import { ProfilePage } from '@/pages/profile'
import { SignInPage } from '@/pages/sign-in-page'
import { SignUpPage } from '@/pages/sign-up-page'
import { useGetMeQuerySate } from '@/services/auth/auth.service'

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
  {
    element: <NotFoundPage />,
    path: '*',
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
    element: <LearnCardPage />,
    path: 'learn/:id',
  },
]

const router = createBrowserRouter([
  {
    children: [
      ...publicRouters,
      {
        children: privateRoutes,
        element: <PrivateAppRoutes />,
      },
    ],
    element: <Layout />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}

function Layout() {
  const { data, isError, isLoading } = useGetMeQuerySate()

  const user = isError ? undefined : data

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Page>
        <Header
          email={user?.email}
          isLogin={!!user?.id}
          name={user?.name}
          userPhoto={user?.avatar}
        />
        <Outlet />
      </Page>
    </>
  )
}

function PrivateAppRoutes() {
  const { isError, isLoading } = useGetMeQuerySate()

  if (isLoading) {
    return <Loader />
  }
  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
