import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useFetch } from "./utils/useFetch";
import { useEffect, useState } from "react";

const URL = "https://fakestoreapi.com/products";

const App = () => {
  const { data, error, loading } = useFetch(URL);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!error) return;
    console.error(error);
    throw new Error(error);
  }, [error]);

  return (
    <>
      <Navbar
        itemCount={cartItems.reduce((total, { quantity }) => {
          return total + quantity;
        }, 0)}
      />
      <Outlet context={{ data, setCartItems, cartItems, loading }} />
    </>
  );
};

export default App;
