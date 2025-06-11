import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.leftSide}>
        <Link to="/">
          <span className={styles.logo}>🛍️</span>
        </Link>
        <Link to="/">Home</Link>
      </div>

      <div className={styles.links}>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
      </div>
    </div>
  );
};
export default NavBar;
