import { type IUserState } from 'entities/user/model/slice'
import { type ILoginState } from 'features/login/model/slice'

export interface AppState {
  user: IUserState
  login: ILoginState
}
