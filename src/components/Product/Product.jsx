import { useState } from "react";
import styles from "./Product.module.css";

function Product({ id, title, price, image, setCartItems }) {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCartItems((prev) => {
      const map = new Map(prev);
      map.has(id) ? map.set(id, map.get(id) + quantity) : map.set(id, quantity);
      return map;
    });

    setQuantity(1);
  };

  return (
    <article data-id={id} className={styles.card}>
      <h2>{title}</h2>
      <div aria-hidden="true" className={styles.img}>
        <img src={image} alt="" width="300" height="300" />
      </div>
      <strong>${price}</strong>
      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <button
            type="button"
            onClick={() => setQuantity((q) => q - 1)}
            disabled={quantity <= 1}>
            -
          </button>
          <input
            aria-label="quantity"
            type="number"
            min="1"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button type="button" onClick={() => setQuantity((q) => q + 1)}>
            +
          </button>
        </div>
        <button type="submit" aria-label="add to cart" className={styles.add}>
          cart + svg
        </button>
      </form>
    </article>
  );
}

export default Product;
