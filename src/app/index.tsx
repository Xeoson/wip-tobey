import { AppProviders } from './AppProviders'
import { AppRouter } from './AppRouter'
import './index.scss'

const App = (): JSX.Element => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  )
}

export default App
