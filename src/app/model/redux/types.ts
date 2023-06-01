import { type AsyncThunkOptions } from '@reduxjs/toolkit'
import type Firestore from 'app/api/firestore/firestore'
import { type IUserState } from 'entities/user/model/slice'
import { type ILoginState } from 'features/login/model/slice'
import { type NavigateFunction } from 'react-router-dom'
import type FirebaseAuth from 'shared/api/firebase-auth'
import { type DispatchType } from '.'
import { type IMainState } from './main/slice'

export interface AppState {
  user: IUserState
  main: IMainState
  login?: ILoginState
}

export interface CreateStoreOptions {
  initState?: AppState
  navigate?: NavigateFunction
}

export interface ThunkExtraType {
  auth: FirebaseAuth
  firestore: Firestore
  navigate?: NavigateFunction
}

export interface ThunkConfig extends AsyncThunkOptions {
  dispatch: DispatchType
  extra: ThunkExtraType
}
