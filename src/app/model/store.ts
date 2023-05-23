import { configureStore } from '@reduxjs/toolkit'
import { homeReducer } from '../../pages/Home/slice'
import { profileReducer } from '../../pages/Profile/slice'

export const store = configureStore({
  reducer: { nav: homeReducer, profile: profileReducer },
})

export type RootStore = ReturnType<typeof store.getState>
