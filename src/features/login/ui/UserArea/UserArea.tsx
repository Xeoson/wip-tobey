import browserRoutes from 'app/lib/browserRoutes'
import { useAppDispatch } from 'app/model/redux'
import { MainActions } from 'app/model/redux/main/slice'
import { getIsDataLoading, getUser } from 'entities/user/model/selectors'
import { signOut } from 'features/login/model/thunks'
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import User from 'shared/ui/Blocks/User'
import Button from 'shared/ui/Buttons/Button'
import GridSkeletonLoader from 'shared/ui/Loaders/GridSkeletonLoader'
import s from './UserArea.module.scss'

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
          <Button
            className={s.logoutBtn}
            onClick={handleLogout}
            theme="primary"
            size="sm"
          >
            <FiLogOut />
          </Button>
        )}
      </User>
    </Link>
  ) : (
    <Button
      onClick={handleLogin}
      className={s.loginBtn}
      size="md"
      theme="secondary"
    >
      <FiLogIn />
      <span>Log In</span>
    </Button>
  )
}

export default UserArea
