import { type IUser } from '@/app/api/firestore/types/models'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface IUserState {
  user?: IUser
  isDataLoading: boolean
}

const initialState: IUserState = {
  isDataLoading: true,
}

export const { actions: UserActions, reducer: UserReducer } = createSlice({
  name: 'User',
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<typeof initialState>>) => ({
      ...state,
      ...payload,
    }),
  },
})
