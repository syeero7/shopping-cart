import styles from "./CartItem.module.css";

function CartItem({ title, price, image, quantity, onClick }) {
  return (
    <article className={styles.card}>
      <h2>{title}</h2>
      <div aria-hidden="true" className={styles.img}>
        <img src={image} alt="" width="300" height="300" />
      </div>
      <strong>${price}</strong>
      <p>quantity: {quantity}</p>

      <button onClick={onClick}>Remove from cart</button>
    </article>
  );
}

export default CartItem;
