import { useOutletContext } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.css";

function Cart() {
  const { data, cartItems } = useOutletContext();

  const items = data?.filter((item) => cartItems.has(item.id));

  return (
    <>
      <h1>Cart</h1>
      {!items?.length ? (
        <div className={styles.empty}>
          <p>cart is empty</p>
        </div>
      ) : (
        <article className={styles.container}>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <CartItem
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  quantity={cartItems.get(item.id)}
                  image={item.image}
                />
              </li>
            ))}
          </ul>
        </article>
      )}
    </>
  );
}

export default Cart;
