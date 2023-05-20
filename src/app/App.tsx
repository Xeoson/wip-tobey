import { AppProviders } from './AppProviders'
import { AppRouter } from './AppRouter'

const App = (): JSX.Element => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  )
}

export default App
