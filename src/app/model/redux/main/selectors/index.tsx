import { type AppState } from '../../types'

export const getOpenedModal = (state: AppState) => state.main.openedModal
export const getIsDarkTheme = (state: AppState) => state.main.isDarkTheme