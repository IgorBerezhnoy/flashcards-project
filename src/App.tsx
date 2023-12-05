import { Loader } from '@/components/ui/loading/loader'
import { AppRouter } from '@/router'
import { useMeQuery } from '@/services/auth/auth.service'

export function App() {
  const { isLoading } = useMeQuery()

  if (isLoading) {
    return <Loader />
  }

  return <AppRouter />
}
