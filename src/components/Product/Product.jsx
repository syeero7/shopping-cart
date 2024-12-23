import PropTypes from "prop-types";
import addToCart from "../../assets/add-cart.svg";
import { useState } from "react";
import styles from "./Product.module.css";

function Product({ id, title, price, image, setCartItems, itemQuantity }) {
  const [quantity, setQuantity] = useState(itemQuantity);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCartItems((c) => {
      return [...c.filter((product) => product.id !== id), { id, quantity }];
    });
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
            disabled={quantity === 1}
          >
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
          <img
            aria-hidden="true"
            src={addToCart}
            alt=""
            width="50"
            height="50"
          />
        </button>
      </form>
    </article>
  );
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  setCartItems: PropTypes.func.isRequired,
  itemQuantity: PropTypes.number,
};

Product.defaultProps = {
  itemQuantity: 1,
};

export default Product;
