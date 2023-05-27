import { type FunctionComponent } from 'react'
import { type RouteProps } from 'react-router-dom'

type ProtectedRouteProps = RouteProps & {
  Component: FunctionComponent
  isAuth: boolean
  isUserLoading: boolean
  onUnauth: () => void
}

const ProtectedComponent = ({
  isAuth,
	isUserLoading,
  onUnauth,
  Component,
  ...props
}: ProtectedRouteProps) => {
  if (isUserLoading) return null
  if (!isAuth) onUnauth()
  return <Component />
}

export default ProtectedComponent
