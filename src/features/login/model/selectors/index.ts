import { type RootStore } from 'app/model/redux'

export const getIsOpen = (s: RootStore) => s.login.isOpen
