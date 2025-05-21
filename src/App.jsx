import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const { data, loading } = useStoreItems();
  const [cartItems, setCartItems] = useState(new Map());

  return (
    <>
      <Navbar itemCount={cartItems.size} />
      <main>
        <Outlet context={{ data, setCartItems, loading, cartItems }} />
      </main>
    </>
  );
};

const URL = "https://fakestoreapi.com/products";

const useStoreItems = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      if (!res.ok) throw res;

      const data = await res.json();
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading };
};

export default App;
