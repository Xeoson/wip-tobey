import { memo } from 'react'
import withLazyQuery from 'shared/lib/components/withLazyQuery'
import Modal from 'shared/ui/Modals/Modal'
import s from './LoginModal.module.scss'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const skeletonTemplate = `". b1 ." 2rem \n "b2 b2 b2" 4rem \n "b3 b3 b3" 4rem \n ". b4 ." 3rem`

const mockFn = async () =>
  await new Promise((res, rej) =>
    setTimeout(() => {
      res(null)
    }, 5000)
  )
const LoginFormLazy = withLazyQuery(
  async () => await import('../LoginForm/LoginForm'),
  { queryKey: 'form', queryFn: mockFn },
  { gridTemplate: skeletonTemplate }
)

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={s.main}>
      <LoginFormLazy />
    </Modal>
  )
}

export default memo(LoginModal)
