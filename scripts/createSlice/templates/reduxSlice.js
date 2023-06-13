module.exports = ({ filename }) => `
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface I${filename}State {}

const initialState: I${filename}State = {}

export const { actions: ${filename}Actions, reducer: ${filename}Reducer } = createSlice({
  name: '${filename}',
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<I${filename}State>>) => ({
      ...state,
      ...payload,
    }),
  },
})

`
