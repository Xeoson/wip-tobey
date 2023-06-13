import { type AsyncThunk } from '@reduxjs/toolkit'
import { type DispatchType } from 'app/model/redux'
import { type ThunkConfig } from 'app/model/redux/types'

export default async <R, P>(
  dispatch: DispatchType,
  thunk: AsyncThunk<R, P, ThunkConfig>,
  args: P
) => (await dispatch(thunk(args))).payload as R
