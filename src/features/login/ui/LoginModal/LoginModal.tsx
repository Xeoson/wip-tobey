import { useAppSelector } from 'app/model/redux'
import { getIsOpen } from 'features/login/model/selectors'
import { LoginActions } from 'features/login/model/slice'
import { Suspense, lazy } from 'react'
import { useDispatch } from 'react-redux'
import PageLoader from 'shared/ui/Loaders/PageLoader'
import Modal from 'shared/ui/Modals/Modal'
import s from './LoginModal.module.scss'

const LoginForm = lazy(async () => await import('../LoginForm/LoginForm'))

interface LoginModalProps {}

const LoginModal = (props: LoginModalProps) => {
  const isOpen = useAppSelector(getIsOpen)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(LoginActions.set({ isOpen: false, formError: '', isLoading: false }))
  }

  return (
    <Modal isOpen={isOpen} onBackdropClick={handleClose} className={s.main}>
      <Suspense fallback={<PageLoader />}>
        <LoginForm />
      </Suspense>
    </Modal>
  )
}

export default LoginModal
