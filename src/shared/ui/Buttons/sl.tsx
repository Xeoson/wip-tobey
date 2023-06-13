import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface I {}

const initialState = {}

export const { actions: Actions, reducer: Reducer } = createSlice({
  name: '',
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<typeof initialState>>) => ({
      ...state,
      ...payload,
    }),
  },
})
