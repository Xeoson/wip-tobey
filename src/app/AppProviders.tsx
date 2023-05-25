import { type PropsWithChildren } from 'react'
import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from './ErrorBoundary'
import { MatchHoverProvider, MatchTabletProvider } from './lib/const'
import { queryClient } from './model/react-query'
import { store } from './model/redux'

export const AppProviders = ({ children }: PropsWithChildren) => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MatchTabletProvider>
          <MatchHoverProvider>
            <ErrorBoundary>{children}</ErrorBoundary>
          </MatchHoverProvider>
        </MatchTabletProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
)
