import { Suspense, memo } from 'react'
import GridSkeletonLoader from 'shared/ui/Loaders/GridSkeletonLoader'
import Modal from 'shared/ui/Modals/Modal'
import LoginFormLazy from '../LoginForm/LoginFormLazy'
import s from './LoginModal.module.scss'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const skeleton = (
  <GridSkeletonLoader
    gridTemplate={`". b1 ." 2rem \n "b2 b2 b2" 4rem \n "b3 b3 b3" 4rem \n ". b4 ." 3rem`}
  />
)

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={s.main}>
      <Suspense fallback={skeleton}>
        <LoginFormLazy />
      </Suspense>
    </Modal>
  )
}

export default memo(LoginModal)
