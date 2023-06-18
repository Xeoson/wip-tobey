import {
  bindActionCreators,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { type IAdminCollections } from '../lib/types'

export interface IAdminState {
  selectedCollection: keyof IAdminCollections
  formType?: 'edit' | 'create'
  searchTerm?: string
  selectedSearchField?: string
}

const initialState: IAdminState = {
  selectedCollection: 'category',
  searchTerm: '',
}

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

export const useAdminActions = (): typeof AdminActions => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(AdminActions, dispatch), [])
}
