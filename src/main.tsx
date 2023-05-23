import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createMatchMedia } from 'shared/lib/hooks/useMatchMedia'
import App from './app'

const root = createRoot(document.querySelector('#root') as HTMLDivElement)

const styles = getComputedStyle(document.documentElement)
const tabletMinWidth = styles.getPropertyValue('--tablet-min-w')
export const [MatchTabletProvider, useMatchTablet] = createMatchMedia(
  `(min-width: ${tabletMinWidth})`
)
export const [MatchHoverProvider, useMatchHover] =
  createMatchMedia(`(hover: hover)`)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
