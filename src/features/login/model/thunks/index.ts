import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppFirestore } from 'app/api/firestore/firestore'
import { type IUser } from 'app/api/firestore/types'
import { UserActions } from 'entities/user/model/slice'
import { AppAuth } from 'features/login/api/auth'

interface SignInFields {
  email: string
  password: string
}
interface SignUpFields extends SignInFields {
  name?: string
}

export const signUp = createAsyncThunk<any, SignUpFields>(
  'login/signUp',
  async ({ email, password, name }, thunkApi) => {
    const userRes = await AppAuth.signUpWithEmail(email, password)
    if (!userRes.email) throw new Error('Email not pass')
    const userDoc: IUser = {
      email: userRes.email,
      id: userRes.uid,
      name: name || `User_${userRes.uid.slice(0, 6)}`,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    }
    const user = await AppFirestore.user.set(userDoc, { returnDoc: true })
    thunkApi.dispatch(UserActions.set({ user }))
  } 
)

export const signIn = createAsyncThunk<any, SignInFields>(
  'login/signIn',
  async ({ email, password }, thunkApi) => {
    const userRes = await AppAuth.signInWithEmail(email, password)
    console.log('signIn userRes', userRes)
  }
)

export const signOut = createAsyncThunk('login/signOut', async () => {
  await AppAuth.signOut()
  location.reload()
})
