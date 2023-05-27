import { type DeepPartial } from '@reduxjs/toolkit'
import { createStore } from 'app/model/redux'
import { type AppState } from 'app/model/redux/types'
import { type PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

interface StoreProviderProps extends PropsWithChildren {
  initState?: DeepPartial<AppState>
}

const StoreProvider = ({ initState, children }: StoreProviderProps) => {
  const store = createStore(initState)

  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
