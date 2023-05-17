import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import browserRoutes from "./common/browserRoutes";
// import TabBar from "./components/TabBar/TabBar";
import DateGrouppedOrders from "./components/Sections/DateGrouppedList";
import FavoriteProducts from "./components/Sections/FavoriteProducts";
import { useMatchTablet } from "./main";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import MobileAddress from "./pages/MobileAddress/MobileAddress";
import MobileFavorites from "./pages/MobileFavorites/MobileFavorites";
import MobileOrderHistory from "./pages/MobileOrderHistory/MobileOrderHistory";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";
import MobileProfile from "./pages/Profile/MobileProfile";
import Profile from "./pages/Profile/Profile";
import UserAddressList from "./components/Sections/UserAddressList";

const TabBar = lazy(() => import("./components/TabBar/TabBar"));

interface AppProps {}

const App = (props: AppProps) => {
  const matchTablet = useMatchTablet();

  return (
    <>
      <Routes>
        <Route path={browserRoutes.home} element={<Home />} />
        <Route path={browserRoutes.cart} element={<Cart />} />
        <Route path={browserRoutes.product()} element={<Product />} />
        <Route path={"*"} element={<NotFound />} />
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
      {!matchTablet && (
        <Suspense fallback={null}>
          <TabBar />
        </Suspense>
      )}
    </>
  );
};

export default App;
