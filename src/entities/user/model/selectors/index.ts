import { type AppState } from '@/app/model/redux/types'
import createSliceSelectors from '@/shared/lib/helpers/createSliceSelectors'

export const getUser = (state: AppState) => state.user.user
export const getIsDataLoading = (state: AppState) => state.user.isDataLoading

export const { useUser } = createSliceSelectors('user', 'isDataLoading', 'user')
