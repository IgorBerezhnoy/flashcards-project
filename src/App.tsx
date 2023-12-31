import { ToastContainer } from 'react-toastify'

import { Loader } from '@/components/ui/loading/loader'
import { AppRouter } from '@/router'
import { useMeQuery } from '@/services/auth/auth.service'

export function App() {
  const { isLoading } = useMeQuery()

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        position={'top-right'}
        rtl={false}
        theme={'light'}
      />
      <ToastContainer />

      <AppRouter />
    </>
  )
}
