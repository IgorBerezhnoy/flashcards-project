import { useAppDispatch } from '@/hooks/useAppDispatch'
import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit'

export const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
  const dispatch = useAppDispatch()

  return bindActionCreators<T, RemapActionCreators<T>>(actions, dispatch)
}

// Types
type IsValidArg<T> = T extends object ? (keyof T extends never ? false : true) : true
type ActionCreatorResponse<T extends (...args: any[]) => any> = ReturnType<ReturnType<T>>
type ReplaceReturnType<T, TNewReturn> = T extends (...args: any[]) => unknown
  ? IsValidArg<Extract<T, (...args: any[]) => any>> extends true
    ? (...args: Parameters<Extract<T, (...args: any[]) => any>>) => TNewReturn
    : () => TNewReturn
  : never

type RemapActionCreators<T extends ActionCreatorsMapObject> = {
  [K in keyof T]: ReplaceReturnType<T[K], ActionCreatorResponse<T[K]>>
}
