import { createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";

const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route errorElement={<ErrorPage />} />
    <Route index element={<Home />} />
    <Route path="products" element={<Products />} />
    <Route path="cart" element={<Cart />} />
  </Route>
);

export default routes;
