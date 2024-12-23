import { useOutletContext } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.css";

function Cart() {
  const { data, cart } = useOutletContext();

  const items = data?.filter((item) => cart[item.id]);

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
                  quantity={cart[item.id]?.quantity}
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
