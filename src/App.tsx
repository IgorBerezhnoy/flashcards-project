import { Router } from '@/router'
import { useMeQuery } from '@/services/auth.service'

export function App() {
  const { data } = useMeQuery()

  return <Router data={data} />
}
