import styles from "./CartItem.module.css";

function CartItem({ id, title, price, image, quantity }) {
  return (
    <article data-id={id} className={styles.card}>
      <h2>{title}</h2>
      <div aria-hidden="true" className={styles.img}>
        <img src={image} alt="" width="300" height="300" />
      </div>
      <strong>${price}</strong>
      <p>quantity: {quantity}</p>
    </article>
  );
}

export default CartItem;
