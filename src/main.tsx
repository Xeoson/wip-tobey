import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { AppProviders } from './app/AppProviders'
import './global.scss'
import { createMatchMedia } from './hooks/useMatchMedia'

const root = createRoot(document.querySelector('#root') as HTMLDivElement)

const styles = getComputedStyle(document.documentElement)
const tabletMinWidth = styles.getPropertyValue('--tablet-min-w')
export const [MatchTabletProvider, useMatchTablet] = createMatchMedia(
  `(min-width: ${tabletMinWidth})`
)

root.render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
)
