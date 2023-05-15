
import {Suspense, lazy} from 'react'
import { Route, Routes } from "react-router-dom";
import browserRoutes from "./common/browserRoutes";
// import TabBar from "./components/TabBar/TabBar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";
import Profile from "./pages/Profile/Profile";
import { useMatchTablet } from './main';

const TabBar = lazy(() => import("./components/TabBar/TabBar"));

interface AppProps {}

const App = (props: AppProps) => {
	const matchTablet = useMatchTablet()

  return (
    <>
      <Routes>
        <Route path={browserRoutes.home} element={<Home />} />
        <Route path={browserRoutes.cart} element={<Cart />} />
        <Route path={browserRoutes.product()} element={<Product />} />
        <Route path={browserRoutes.userProfile} element={<Profile />}>
          <Route path={browserRoutes.profile()} element={<Profile />} />
        </Route>
        <Route path={"*"} element={<NotFound />} />
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
