import { MatchHoverProvider, MatchTabletProvider } from 'main'
import { type PropsWithChildren } from 'react'
import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { queryClient } from './model/react-query'
import { store } from './model/store'

export const AppProviders = ({ children }: PropsWithChildren) => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MatchTabletProvider>
          <MatchHoverProvider>{children}</MatchHoverProvider>
        </MatchTabletProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
)
