import { type AppState } from 'app/model/redux/types'

export const getIsOpen = (s: AppState) => s.login?.isOpen
export const getIsLoading = (s: AppState) => s.login.isLoading
export const getFormType = (s: AppState) => s.login.formType
export const getFormError = (s: AppState) => s.login.formError