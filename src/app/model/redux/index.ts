import {
  configureStore,
  type CombinedState,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit'
import { api } from '@/app/api'
import { AppFirestore } from '@/app/api/firestore'
import { UserReducer } from '@/entities/user/model/slice'
import { AppAuth } from '@/features/login/api/auth'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'
import { MainReducer } from './main/slice'
import { createReducerManager } from './reducerManager'
import {
  type AppState,
  type CreateStoreOptions,
  type ThunkExtraType,
} from './types'

export const createStore = ({ initState, navigate }: CreateStoreOptions) => {
  const reducers: ReducersMapObject<AppState> = {
    user: UserReducer,
    main: MainReducer,
    api: api.reducer,
  }

  const reducerManager = createReducerManager(reducers)

  const thunkExtra: ThunkExtraType = {
    auth: AppAuth,
    firestore: AppFirestore,
    navigate,
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<AppState>>,
    preloadedState: initState,
    devTools: true,
    middleware: (midd) =>
      midd({
        thunk: { extraArgument: thunkExtra },
      }).concat(api.middleware),
  })

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type DispatchType = ReturnType<typeof createStore>['dispatch']
export const useAppDispatch: () => DispatchType = () => useDispatch()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
