import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface ILoginState {
  isOpen: boolean
}

const initialState: ILoginState = {
  isOpen: false,
}

export const { actions: LoginActions, reducer: LoginReducer } = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<typeof initialState>>) => ({
      ...state,
      ...payload,
    }),
  },
})
