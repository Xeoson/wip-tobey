import { RootStore, createStore } from 'app/model/redux'
import { getIsOpen } from '.'
import { ILoginState, LoginActions, LoginReducer } from '../slice'

describe('getIsOpen', () => {
  test('getting', () => {
    const state = {login: {isOpen: true}} as RootStore
    expect(getIsOpen(state)).toEqual(true)
  })
  test('setting', () => {
    const state: ILoginState = { isOpen: false }
    expect(LoginReducer(state, LoginActions.set({ isOpen: true }))).toEqual({
      isOpen: true,
    })
  })
})
