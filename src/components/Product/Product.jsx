import PropTypes from "prop-types";
import addToCart from "../../assets/add-cart.svg";
import { useState } from "react";

function Product({ id, title, price, image, setCartItems, itemQuantity }) {
  const [quantity, setQuantity] = useState(itemQuantity);

  const handleSubmit = (e) => {
    e.preventDefault();

    setCartItems((c) => {
      return [...c.filter((product) => product.id !== id), { id, quantity }];
    });
  };

  return (
    <article data-id={id}>
      <h2>{title}</h2>
      <div aria-hidden="true">
        <img src={image} alt="" />
      </div>
      <strong>${price}</strong>
      <form onSubmit={handleSubmit}>
        <div>
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
        <button type="submit" aria-label="add to cart">
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
