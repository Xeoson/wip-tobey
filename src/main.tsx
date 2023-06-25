import { AppProviders } from '@/app/ui/AppProviders'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLDivElement
)

root.render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
)
