import { createAsyncThunk } from '@reduxjs/toolkit'
import { type IUser } from '@/app/api/firestore/types'
import browserRoutes from '@/app/lib/browserRoutes'
import { MainActions } from '@/app/model/redux/main/slice'
import { type ThunkConfig } from '@/app/model/redux/types'
import { UserActions } from '@/entities/user/model/slice'

export interface SignInFields {
  email: string
  password: string
}
export interface SignUpFields extends SignInFields {
  name?: string
}

export const signUp = createAsyncThunk<any, SignUpFields, ThunkConfig>(
  'login/signUp',
  async ({ email, password, name }, { dispatch, extra }) => {
    const userRes = await extra.auth.signUpWithEmail(email, password)
    if (!userRes.email) throw new Error('Email not pass')
    const userDoc: IUser = {
      email: userRes.email,
      id: userRes.uid,
      name: name || `User_${userRes.uid.slice(0, 6)}`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
    const user = await extra.firestore.collection.set('user', userDoc, {
      returnDoc: true,
    })
    // const user = await extra.firestore.user.set(userDoc, { returnDoc: true })
    dispatch(UserActions.set({ user }))
    dispatch(MainActions.set({ openedModal: undefined }))
  }
)

export const signIn = createAsyncThunk<any, SignInFields, ThunkConfig>(
  'login/signIn',
  async ({ email, password }, { dispatch, extra }) => {
    const userRes = await extra.auth.signInWithEmail(email, password)
    const user = await extra.firestore.collection.get('user', userRes.uid)
    dispatch(UserActions.set({ user }))
    dispatch(MainActions.set({ openedModal: undefined }))
  }
)

export const signOut = createAsyncThunk<unknown, never, ThunkConfig>(
  'login/signOut',
  async (_, { extra }) => {
    await extra.auth.signOut()
    location.replace(browserRoutes.home)
  }
)
