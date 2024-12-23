import PropTypes from "prop-types";

function CartItem({ id, title, price, image, quantity }) {
  return (
    <article data-id={id}>
      <h2>{title}</h2>
      <div aria-hidden="true">
        <img src={image} alt="" />
      </div>
      <strong>${price}</strong>
      <p>quantity: {quantity}</p>
    </article>
  );
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItem;
