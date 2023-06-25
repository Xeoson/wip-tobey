import browserRoutes from '@/app/lib/browserRoutes'
import { useAppDispatch } from '@/app/model/redux'
import { MainActions } from '@/app/model/redux/main/slice'
import { getIsDataLoading, getUser } from '@/entities/user/model/selectors'
import { signOut } from '@/features/login/model/thunks'
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button, { type ButtonStyles } from '@/shared/kit/ui/Button/Button'
import User from '@/shared/ui/Blocks/User'
import GridSkeletonLoader from '@/shared/ui/Loaders/GridSkeletonLoader'

const logoutBtnStyles: ButtonStyles = {
  theme: 'primary',
  size: 'sm',
  ml: 'auto',
}

const loginBtnStyles: ButtonStyles = {
  theme: 'secondary',
  size: 'md',
	gap: 'xs'
}

interface UserAreaProps {
  withLogOutBtn?: boolean
}

const skeletonTemplate = `"i1 b1" \n "i1 b2" / auto 1fr`

const UserArea = ({ withLogOutBtn = false }: UserAreaProps) => {
  const isLoading = useSelector(getIsDataLoading)
  const user = useSelector(getUser)
  const dispatch = useAppDispatch()

  if (isLoading) {
    return (
      <GridSkeletonLoader
        width="12rem"
        height="3rem"
        gridTemplate={skeletonTemplate}
      />
    )
  }

  const handleLogin = () => {
    dispatch(MainActions.set({ openedModal: 'login' }))
  }
  const handleLogout = () => {
    dispatch(signOut())
  }

  return user ? (
    <Link to={browserRoutes.userProfile}>
      <User user={user}>
        {withLogOutBtn && (
          <Button styles={logoutBtnStyles} onClick={handleLogout}>
            <FiLogOut />
          </Button>
        )}
      </User>
    </Link>
  ) : (
    <Button
      onClick={handleLogin}
      styles={loginBtnStyles}
    >
      <FiLogIn />
      <span>Log In</span>
    </Button>
  )
}

export default UserArea
