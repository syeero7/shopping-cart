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

  const cart = cartItems.reduce((acc, obj) => {
    return { ...acc, [obj.id]: { quantity: obj.quantity } };
  }, {});

  return (
    <>
      <Navbar
        itemCount={cartItems.reduce((total, { quantity }) => {
          return total + quantity;
        }, 0)}
      />
      <main>
        <Outlet context={{ data, setCartItems, cart, loading }} />
      </main>
    </>
  );
};

export default App;
