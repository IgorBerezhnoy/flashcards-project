import { Rating } from '@/components/ui/rating/rating'

export function App() {
  return (
    <>
      <Rating onClick={() => console.log('aaaa')} value={3} />
    </>
  )
}
