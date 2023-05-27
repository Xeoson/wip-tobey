import {
  configureStore,
  type DeepPartial,
  type ReducersMapObject,
} from '@reduxjs/toolkit'
import { UserReducer } from 'entities/user/model/slice'
import { LoginReducer } from 'features/login/model/slice'
import { useSelector, type TypedUseSelectorHook } from 'react-redux'
import { createReducerManager } from './reducerManager'
import { type AppState } from './types'

export const createStore = (initState?: DeepPartial<AppState>) => {
  const reducers: ReducersMapObject<AppState> = {
    user: UserReducer,
    login: LoginReducer,
  }

  const reducerManager = createReducerManager(reducers)

  const store = configureStore<AppState>({
    // @ts-expect-error
    reducer: reducerManager.reduce,
    preloadedState: initState,
		devTools: !!process.env.IS_DEV
  })
  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
