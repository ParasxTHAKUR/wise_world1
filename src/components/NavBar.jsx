import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <NavLink to="/product">
          <li>PRODUCT</li>
        </NavLink>
        <NavLink to="/pricing">
          <li>PRICING</li>
        </NavLink>
        <li>
          <NavLink className={styles.ctaLink} to="/login">
            LOGIN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
