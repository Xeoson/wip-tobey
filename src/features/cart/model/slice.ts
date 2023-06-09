import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState = {}

export const { actions: CartActions, reducer: CartReducer } = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<typeof initialState>>) => ({
      ...state,
      ...payload,
    }),
  },
})
