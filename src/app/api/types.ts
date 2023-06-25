import { type BaseQueryApi } from '@reduxjs/toolkit/dist/query'
import { type QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { type MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers'
import { type DispatchType } from '@/app/model/redux'
import { type AppState, type ThunkExtraType } from '@/app/model/redux/types'

export interface AppBaseQueryApi extends BaseQueryApi {
  getState: () => AppState
  dispatch: DispatchType
  extra: ThunkExtraType
}

export type AppBaseQueryFn<
  Args = unknown,
  Result = unknown,
  Error = unknown,
  DefinitionExtraOptions = unknown,
  Meta = unknown
> = (
  args: Args,
  api: AppBaseQueryApi,
  extraOptions: DefinitionExtraOptions
) => MaybePromise<QueryReturnValue<Result, Error, Meta>>
