import { NavLink } from 'react-router-dom'

import { Button } from '@/components/ui'

export const Buttons = ({
  setShowAnswer,
  showAnswer,
}: {
  setShowAnswer: (value: boolean) => void
  showAnswer: boolean
}) => {
  return (
    <>
      {!showAnswer && (
        <Button fullWidth onClick={() => setShowAnswer(true)} variant={'primary'}>
          Show Answer
        </Button>
      )}
      <NavLink to={'/'}>
        <Button fullWidth variant={'secondary'}>
          End study session
        </Button>
      </NavLink>
    </>
  )
}
