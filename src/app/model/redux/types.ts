import { type AsyncThunkOptions } from '@reduxjs/toolkit'
import type FirestoreDB from 'app/api/firestore/firestore'
import { type IUserState } from 'entities/user/model/slice'
import { type IAdminState } from 'pages/Admin/model/slice'
import { type NavigateFunction } from 'react-router-dom'
import type FirebaseAuth from 'shared/api/firebase-auth'
import { type DispatchType } from '.'
import { type ILoginState } from './../../../features/login/model/slice'
import { type IMainState } from './main/slice'

export interface LazyAppState {
  login?: ILoginState
  admin?: IAdminState
}

export interface AppState extends LazyAppState {
  user: IUserState
  main: IMainState
}

export interface CreateStoreOptions {
  initState?: AppState
  navigate?: NavigateFunction
}

export interface ThunkExtraType {
  auth: FirebaseAuth
  firestore: FirestoreDB
  navigate?: NavigateFunction
}

export interface ThunkConfig extends AsyncThunkOptions {
  dispatch: DispatchType
  extra: ThunkExtraType
}
