import { type PropsWithChildren } from 'react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { MatchHoverProvider, MatchTabletProvider } from '../lib/const'
import { queryClient } from '../model/react-query'
import { ErrorBoundary } from './ErrorBoundary'
import StoreProvider from './StoreProvider'

export const AppProviders = ({ children }: PropsWithChildren) => (
  <StoreProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MatchTabletProvider>
          <MatchHoverProvider>
            <ErrorBoundary>{children}</ErrorBoundary>
          </MatchHoverProvider>
        </MatchTabletProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StoreProvider>
)
