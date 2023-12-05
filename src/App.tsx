import { AppRouter } from '@/router'
import { useMeQuery } from '@/services/auth/auth.service'

export function App() {
  const { isLoading } = useMeQuery()

  console.log(useMeQuery())

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <AppRouter />
}
