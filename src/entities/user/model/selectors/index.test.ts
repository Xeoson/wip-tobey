import { AppState } from '@/app/model/redux/types'
import { getIsDataLoading } from '.'
import { IUserState, UserActions, UserReducer } from '../slice'

describe('getIsDataLoading', () => {
  test('select', () => {
    const state = {
      user: { isDataLoading: true },
    } as AppState
    expect(getIsDataLoading(state)).toEqual(true)
  })
  test('dispatch', () => {
    const state = {
      isDataLoading: true,
    } as IUserState
    expect(
      UserReducer(state, UserActions.set({ isDataLoading: false }))
    ).toEqual({ isDataLoading: false })
    expect(
      UserReducer(state, UserActions.set({ isDataLoading: true }))
    ).toEqual({ isDataLoading: true })
  })
})
