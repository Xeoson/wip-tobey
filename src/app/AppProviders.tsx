import { type PropsWithChildren } from 'react'
import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { queryClient } from '../lib/react-query'
import { MatchTabletProvider } from '../main'
import { store } from './AppStore'

export const AppProviders = ({ children }: PropsWithChildren) => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MatchTabletProvider>{children}</MatchTabletProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
)
