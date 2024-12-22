import { NavLink } from "react-router-dom";
import home from "../../assets/home.svg";
import cart from "../../assets/cart.svg";
import PropTypes from "prop-types";

function Navbar({ itemCount }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <span className="visually-hidden">home</span>
              <img
                aria-hidden="true"
                src={home}
                alt=""
                width="50"
                height="50"
              />
            </NavLink>
          </li>

          <li>
            <NavLink to="/products">Products</NavLink>
          </li>

          <li>
            <NavLink to="/cart">
              <span className="visually-hidden">shopping cart</span>
              <img
                aria-hidden="true"
                src={cart}
                alt=""
                width="50"
                height="50"
              />
            </NavLink>
            <span aria-label="cart item count">{itemCount}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default Navbar;
