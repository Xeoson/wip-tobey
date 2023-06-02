import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type IModal = 'login'

export interface IMainState {
  openedModal?: IModal
  isDarkTheme: boolean
}

const initialState: IMainState = {
  isDarkTheme: false,
}

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
