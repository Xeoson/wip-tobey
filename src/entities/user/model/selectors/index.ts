import { type AppState } from 'app/model/redux/types'

export const getUser = (state: AppState) => state.user.user
export const getIsDataLoading = (state: AppState) => state.user.isDataLoading
