import { Route, Routes } from "react-router-dom";
import browserRoutes from "./common/browserRoutes";
import TabBar from "./components/TabBar/TabBar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Product from "./pages/Product/Product";

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <>
      <Routes>
        <Route path={browserRoutes.home} element={<Home />} />
        <Route path={browserRoutes.cart} element={<Cart />} />
        <Route path={browserRoutes.product()} element={<Product />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <TabBar />
    </>
  );
};

export default App;
