import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLDivElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
