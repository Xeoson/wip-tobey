/* eslint-disable @typescript-eslint/no-floating-promises */
import useAuthChanged from '@/features/login/model/hooks/useAuthChanged'
import './index.scss'
import 'normalize.css/normalize.css'
import AppModal from './ui/AppModal'
import { AppRouter } from './ui/AppRouter'

const App = (): JSX.Element => {
  useAuthChanged()

  return (
    <>
      <AppRouter />
      <AppModal />
    </>
  )
}

export default App
