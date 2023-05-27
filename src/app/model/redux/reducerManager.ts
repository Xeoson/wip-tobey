/* eslint-disable @typescript-eslint/no-dynamic-delete */
import {
  combineReducers,
  type AnyAction,
  type CombinedState,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit'
import { type AppState } from './types'

export function createReducerManager(
  initialReducers: ReducersMapObject<AppState>
) {
  const reducers = { ...initialReducers }
  let combinedReducer = combineReducers(reducers)

  let keysToRemove: Array<keyof AppState> = []

  return {
    getReducerMap: () => reducers,
    reduce: (state: AppState, action: AnyAction): CombinedState<AppState> => {
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (const key of keysToRemove) {
          delete (state as any)[key]
        }
        keysToRemove = []
      }

      return combinedReducer(state, action)
    },
    add: (key: keyof AppState, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }
      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },

    remove: (key: keyof AppState) => {
      if (!key || !reducers[key]) {
        return
      }
      delete (reducers as any)[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    },
  }
}
