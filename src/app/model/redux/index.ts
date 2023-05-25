import { configureStore } from '@reduxjs/toolkit'
import { LoginReducer } from 'features/login/model/slice'
import { useSelector, type TypedUseSelectorHook } from 'react-redux'
import { homeReducer } from '../../../pages/Home/slice'
import { profileReducer } from '../../../pages/Profile/slice'

export const createStore = <T extends Record<string, any>>(initState?: T) =>
  configureStore({
    reducer: { nav: homeReducer, profile: profileReducer, login: LoginReducer },
    preloadedState: initState,
  })

export const store = createStore()

export type RootStore = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector
