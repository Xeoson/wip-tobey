import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { signIn, signUp } from './thunks'

export interface ILoginState {
  isOpen: boolean
  isLoading: boolean
  formType: 'signIn' | 'signUp'
  formError: string
}

const initialState: ILoginState = {
  isOpen: false,
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
        state.isOpen = false
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
        state.isOpen = false
      })
      .addCase(signIn.rejected, (state, { error }) => {
        state.formError = error.message ?? 'Something went wrong'
        state.isLoading = false
      })
  },
})
