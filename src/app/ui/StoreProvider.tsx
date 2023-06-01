import { createStore } from 'app/model/redux'
import { type AppState } from 'app/model/redux/types'
import { useMemo, type PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps extends PropsWithChildren {
  initState?: AppState
}

const StoreProvider = ({ initState, children }: StoreProviderProps) => {
  const navigate = useNavigate()
  const store = useMemo(() => createStore({ initState, navigate }), [])

  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
