import { useAppDispatch } from '@/app/model/redux'
import {
  bindActionCreators,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { signIn, signUp } from './thunks'
import createSliceSelectors from '@/shared/lib/helpers/createSliceSelectors'

export interface ILoginState {
  isLoading: boolean
  formType: 'signIn' | 'signUp'
  formError: string
}

const initialState: ILoginState = {
  isLoading: false,
  formType: 'signIn',
  formError: '',
}

export const { actions: LoginActions, reducer: LoginReducer } = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<typeof initialState>>) => ({
      ...state,
      ...payload,
    }),
  },
  extraReducers: (build) => {
    build
      .addCase(signUp.pending, (state) => {
        state.formError = ''
        state.isLoading = true
      })
      .addCase(signUp.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(signUp.rejected, (state, { error }) => {
        state.formError = error.message ?? 'Something went wrong'
        state.isLoading = false
      })
      .addCase(signIn.pending, (state) => {
        state.formError = ''
        state.isLoading = true
      })
      .addCase(signIn.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(signIn.rejected, (state, { error }) => {
        state.formError = error.message ?? 'Something went wrong'
        state.isLoading = false
      })
  },
})

export const useLoginActions = () => {
  const dispatch = useAppDispatch()
  return useMemo(() => bindActionCreators(LoginActions, dispatch), [])
}
