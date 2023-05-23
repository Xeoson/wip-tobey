import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useMatchTablet } from '../main'
import PageLoader from '../shared/ui/Loaders/PageLoader'
import browserRoutes from './lib/browserRoutes'

const Cart = lazy(async () => await import('../pages/Cart/Cart'))
const DateGrouppedOrders = lazy(
  async () => await import('../widgets/DateGrouppedOrders/DateGrouppedList')
)
const FavoriteProducts = lazy(
  async () => await import('../widgets/DateGrouppedOrders/DateGrouppedList')
)
const UserAddressList = lazy(
  async () => await import('../widgets/UserAddressList/UserAddressList')
)
const Home = lazy(async () => await import('../pages/Home/Home'))
const MobileAddress = lazy(
  async () => await import('../pages/MobileAddress/MobileAddress')
)
const MobileFavorites = lazy(
  async () => await import('../pages/MobileFavorites/MobileFavorites')
)
const NotFound = lazy(async () => await import('../pages/NotFound/NotFound'))
const Product = lazy(async () => await import('../pages/Product/Product'))
const MobileProfile = lazy(
  async () => await import('../pages/Profile/MobileProfile')
)
const Profile = lazy(async () => await import('../pages/Profile/Profile'))
const MobileOrderHistory = lazy(
  async () => await import('../pages/MobileOrderHistory/MobileOrderHistory')
)

export const AppRouter = () => {
  const matchTablet = useMatchTablet()

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path={browserRoutes.home} element={<Home />} />
        <Route path={browserRoutes.cart} element={<Cart />} />
        <Route path={browserRoutes.product()} element={<Product />} />
        <Route path={'*'} element={<NotFound />} />
        {matchTablet ? (
          <Route path={browserRoutes.userProfile} element={<Profile />}>
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
              element={<MobileProfile />}
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
