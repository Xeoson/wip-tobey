import { getOpenedModal } from '@/app/model/redux/main/selectors'
import { MainActions } from '@/app/model/redux/main/slice'
import LoginModal from '@/features/login/ui/LoginModal/LoginModal'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface AppModalProps {}

const AppModal = (props: AppModalProps) => {
  const openedModal = useSelector(getOpenedModal)
  const dispatch = useDispatch()

  const handleClose = useCallback(() => {
    dispatch(MainActions.set({ openedModal: undefined }))
  }, [])

  return (
    <>
      <LoginModal isOpen={openedModal === 'login'} onClose={handleClose} />
    </>
  )
}

export default AppModal
