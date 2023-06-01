import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type IModal = 'login'

export interface IMainState {
  openedModal?: IModal
}

const initialState: IMainState = {}

export const { actions: MainActions, reducer: MainReducer } = createSlice({
  name: 'Main',
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<typeof initialState>>) => ({
      ...state,
      ...payload,
    }),
  },
})
