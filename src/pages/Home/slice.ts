import { type PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchTerm: ""
}

export const { actions: homeActions, reducer: homeReducer } = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<typeof initialState>>) => ({
      ...state,
      ...payload
    })
  }
})
