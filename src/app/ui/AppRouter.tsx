import browserRoutes from 'app/lib/browserRoutes'
import { useMatchTablet } from 'app/lib/const'
import { getIsDataLoading, getUser } from 'entities/user/model/selectors'
import { LoginActions } from 'features/login/model/slice'
import { Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ProtectedComponent from 'shared/lib/components/ProtectedComponent'

const Cart = lazy(async () => await import('pages/Cart/Cart'))
const DateGrouppedOrders = lazy(
  async () => await import('widgets/DateGrouppedOrders/DateGrouppedList')
)
const FavoriteProducts = lazy(
  async () => await import('widgets/DateGrouppedOrders/DateGrouppedList')
)
const UserAddressList = lazy(
  async () => await import('widgets/UserAddressList/UserAddressList')
)
const Home = lazy(async () => await import('pages/Home/Home'))
const MobileAddress = lazy(
  async () => await import('pages/MobileAddress/MobileAddress')
)
const MobileFavorites = lazy(
  async () => await import('pages/MobileFavorites/MobileFavorites')
)
const NotFound = lazy(async () => await import('pages/NotFound/NotFound'))
const Product = lazy(async () => await import('pages/Product/Product'))
const MobileProfile = lazy(
  async () => await import('pages/Profile/MobileProfile')
)
const Profile = lazy(async () => await import('pages/Profile/Profile'))
const MobileOrderHistory = lazy(
  async () => await import('pages/MobileOrderHistory/MobileOrderHistory')
)

export const AppRouter = () => {
  const matchTablet = useMatchTablet()
  const user = useSelector(getUser)
  const isUserLoading = useSelector(getIsDataLoading)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleUnauth = () => {
    navigate(browserRoutes.home)
    dispatch(LoginActions.set({ isOpen: true }))
  }

  return (
    <Suspense>
      <Routes>
        <Route path={browserRoutes.home} element={<Home />} />
        <Route path={browserRoutes.cart} element={<Cart />} />
        <Route path={browserRoutes.product()} element={<Product />} />
        <Route path={'*'} element={<NotFound />} />
        {matchTablet ? (
          <Route
            path={browserRoutes.userProfile}
            element={
              <ProtectedComponent
                isAuth={!!user}
                isUserLoading={isUserLoading}
                onUnauth={handleUnauth}
                Component={Profile}
              />
            }
          >
            <Route
              path={browserRoutes.addresses}
              element={<UserAddressList />}
            />
            <Route
              path={browserRoutes.favorites}
              element={<FavoriteProducts />}
            />
            <Route
              path={browserRoutes.orderHistory}
              element={<DateGrouppedOrders />}
            />
          </Route>
        ) : (
          <>
            <Route
              path={browserRoutes.userProfile}
              element={
                <ProtectedComponent
                  isUserLoading={isUserLoading}
                  isAuth={!!user}
                  onUnauth={handleUnauth}
                  Component={MobileProfile}
                />
              }
            />
            <Route path={browserRoutes.addresses} element={<MobileAddress />} />
            <Route
              path={browserRoutes.favorites}
              element={<MobileFavorites />}
            />
            <Route
              path={browserRoutes.orderHistory}
              element={<MobileOrderHistory />}
            />
            <Route path={browserRoutes.profile()} element={<MobileProfile />} />
          </>
        )}
      </Routes>
    </Suspense>
  )
}
