/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/consistent-type-assertions */

jest.mock('shared/api/firebase-auth')
jest.mock('shared/api/firestore')

import { type AsyncThunk, type Dispatch } from '@reduxjs/toolkit'
import FirestoreDB from '@/app/api/firestore'
import {
  type AppState,
  type ThunkConfig,
  type ThunkExtraType,
} from '@/app/model/redux/types'
import { type Auth } from 'firebase/auth'
import FirebaseAuth from '@/shared/api/firebase-auth'

type TestExtraType = {
  [Key in keyof ThunkExtraType]: jest.MockedObjectDeep<ThunkExtraType[Key]>
}

export class TestThunk<Return, Args> {
  dispatch: Dispatch = jest.fn()
  getState: () => AppState = jest.fn()
  extra: TestExtraType

  constructor(private readonly thunk: AsyncThunk<Return, Args, ThunkConfig>) {
    this.extra = {
      auth: new FirebaseAuth({} as Auth),
      firestore: new FirestoreDB(),
    } as TestExtraType
  }

  async call(args: Args) {
    const action = this.thunk(args)
    return await action(this.dispatch, this.getState, this.extra)
  }
}
