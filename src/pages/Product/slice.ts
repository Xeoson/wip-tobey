import { type PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {}

export const { actions: productActions, reducer: productReducer } = createSlice(
  {
    name: "product",
    initialState,
    reducers: {
      set: (
        state,
        { payload }: PayloadAction<Partial<typeof initialState>>
      ) => ({
        ...state,
        ...payload
      })
    }
  }
)
