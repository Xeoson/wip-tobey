import { type Reducer } from '@reduxjs/toolkit'
import { type StoreWithReducerManager } from 'app/model/redux/reducerManager'
import { type AppState } from 'app/model/redux/types'
import { useEffect, useMemo, type PropsWithChildren } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducersType = {
  [Key in keyof AppState]?: Reducer<AppState[Key]>
}

export interface ReducerLoaderProps extends PropsWithChildren {
  reducers: ReducersType
  removeOnUnmount?: boolean
  // removeOnUnmount?: boolean | Array<keyof AppState>
}

const ReducerLoader = ({
  reducers,
  removeOnUnmount,
  children,
}: ReducerLoaderProps) => {
  const store = useStore() as StoreWithReducerManager
  const dispatch = useDispatch()

  useMemo(() => {
    Object.entries(reducers).forEach(([name, reducer]: any) => {
      store.reducerManager.add(name, reducer)
      dispatch({ type: `@ADD ${name as string} reducer` })
    })
  }, [])

  useEffect(() => {
    return () => {
      if (removeOnUnmount) {
        Object.keys(reducers).forEach((name: any) => {
          store.reducerManager.remove(name)
          dispatch({ type: `@REMOVE ${name as string} reducer` })
        })
      }
      // if (!removeOnUnmount) return
      // if (typeof removeOnUnmount === 'boolean' && removeOnUnmount) {
      //   Object.keys(reducers).forEach((name: any) => {
      //     store.reducerManager.remove(name)
      //     dispatch({ type: `@REMOVE ${name as string} reducer` })
      //   })
      // } else {
      //   removeOnUnmount.forEach((el) => {
      //     store.reducerManager.remove(el)
      //     dispatch({ type: `@REMOVE reducers` })
      //   })
      // }
    }
  }, [])

  return <>{children}</>
}

export default ReducerLoader
