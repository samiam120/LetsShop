import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="shop">Shop</Link>
        <Link to="cart">Cart</Link>
      </div>
    </div>
  );
};
export default NavBar;
