import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ICollections } from 'app/api/firestore/types'

export interface IAdminState {
  selectedCollection: keyof ICollections
  selectedDocId?: string
  formType?: 'edit' | 'create'
}

const initialState: IAdminState = { selectedCollection: 'category' }

export const { actions: AdminActions, reducer: AdminReducer } = createSlice({
  name: 'Admin',
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<typeof initialState>>) => ({
      ...state,
      ...payload,
    }),
  },
})
