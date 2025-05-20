import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ itemCount }) {
  return (
    <header>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <NavLink to="/">
              <span className="visually-hidden">home</span>
              home svg
            </NavLink>
          </li>

          <li>
            <NavLink to="/products">Products</NavLink>
          </li>

          <li className={styles.cartLink}>
            <NavLink to="/cart">
              <span className="visually-hidden">shopping cart</span>
              cart svg
            </NavLink>
            <span aria-label="cart item count">{itemCount}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
