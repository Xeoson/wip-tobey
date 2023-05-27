/* eslint-disable @typescript-eslint/no-floating-promises */
import useAuthChanged from 'features/login/model/hooks/useAuthChanged'
import LoginModal from 'features/login/ui/LoginModal/LoginModal'
import { useDispatch } from 'react-redux'
import './index.scss'
import { AppRouter } from './ui/AppRouter'

const App = (): JSX.Element => {
  const dispatch = useDispatch()

  useAuthChanged(dispatch)

  return (
    <>
      <AppRouter />
      <LoginModal />
    </>
  )
}

export default App
