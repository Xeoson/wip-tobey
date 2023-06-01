import { Suspense, lazy, memo } from 'react'
import GridSkeletonLoader from 'shared/ui/Loaders/GridSkeletonLoader'
import Modal from 'shared/ui/Modals/Modal'
import s from './LoginModal.module.scss'

const LoginForm = lazy(async () => await import('../LoginForm/LoginForm'))

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const skeletonTemplate = `". b1 ." 2rem \n "b2 b2 b2" 4rem \n "b3 b3 b3" 4rem \n ". b4 ." 3rem`

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={s.main}>
      <Suspense
        fallback={
          <GridSkeletonLoader
            gridTemplate={skeletonTemplate}
            height="100%"
            width="21rem"
          />
        }
      >
        <LoginForm />
      </Suspense>
    </Modal>
  )
}

export default memo(LoginModal)
