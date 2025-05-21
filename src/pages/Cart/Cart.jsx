import { useOutletContext } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.css";

function Cart() {
  const { data, cartItems, setCartItems } = useOutletContext();

  const items = data?.filter((item) => cartItems.has(item.id));
  const total =
    items?.reduce(
      (count, item) => count + item.price * cartItems.get(item.id),
      0
    ) || 0;

  const removeItem = (id) => {
    return () => {
      setCartItems((prev) => {
        const map = new Map(prev);
        map.delete(id);
        return map;
      });
    };
  };

  return (
    <>
      <h1>Cart</h1>
      {!items?.length ? (
        <div className={styles.empty}>
          <p>cart is empty</p>
        </div>
      ) : (
        <>
          <article className={styles.container}>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <CartItem
                    title={item.title}
                    price={item.price}
                    quantity={cartItems.get(item.id)}
                    image={item.image}
                    onClick={removeItem(item.id)}
                  />
                </li>
              ))}
            </ul>
          </article>
          <hr />
          <div className={styles.checkout}>
            <strong>Total ${total.toFixed(2)}</strong>
            <button onClick={() => setCartItems(new Map())}>Checkout</button>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
