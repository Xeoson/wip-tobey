import browserRoutes from 'app/lib/browserRoutes'
import { useMatchTablet } from 'app/lib/const'
import { useAppDispatch } from 'app/model/redux'
import { MainActions } from 'app/model/redux/main/slice'
import { getIsDataLoading, getUser } from 'entities/user/model/selectors'
import Home from 'pages/Home/Home'
import MobileAddress from 'pages/MobileAddress/MobileAddress'
import MobileFavorites from 'pages/MobileFavorites/MobileFavorites'
import MobileOrderHistory from 'pages/MobileOrderHistory/MobileOrderHistory'
import NotFound from 'pages/NotFound/NotFound'
import Product from 'pages/Product/Product'
import MobileProfile from 'pages/Profile/MobileProfile'
import Profile from 'pages/Profile/Profile'
import Cart from 'pages/cart/ui/cart/Cart'
import { Suspense, lazy } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ProtectedComponent from 'shared/lib/components/ProtectedComponent'
import DateGrouppedOrders from 'widgets/DateGrouppedOrders/DateGrouppedList'
import UserAddressList from 'widgets/UserAddressList/UserAddressList'
const AdminLazy = lazy(async () => await import('../../pages/Admin/ui/Admin'))

export const AppRouter = () => {
  const matchTablet = useMatchTablet()
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const user = useSelector(getUser)
  const isUserLoading = useSelector(getIsDataLoading)

  const handleUnauth = () => {
    navigate(browserRoutes.home)
    dispatch(MainActions.set({ openedModal: 'login' }))
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
            {/* <Route
              path={browserRoutes.favorites}
              element={<FavoriteProducts />}
            /> */}
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
        <Route path={browserRoutes.admin} element={<AdminLazy />} />
      </Routes>
    </Suspense>
  )
}
