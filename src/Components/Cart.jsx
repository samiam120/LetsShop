import { useContext } from 'react';
import { OutletContext } from '../App';
import CartItemCard from './CartItemCard';
import styles from '../styles/cart.module.css'
const Cart = () => {
  const { cartState } = useContext(OutletContext);

  if (cartState.cart.length == 0)
    return <p className={styles.empty}>Your Cart is Empty, go shop and add some items!</p>;

  return (
    <>
    {cartState.cart.length == 0 && <p className={styles.empty}>Your Cart is Empty, go shop and add some items!</p>}
    <div className={styles.cartContainer}>
      <div className={styles.cartItems}>
        {cartState.cart.map((item) => {
          return (
            <div key={item.id}>
              <CartItemCard item={item} />
            </div>
          );
        })}
      </div>
      <div className={styles.checkout}>
        <h2>Total: {cartState.totalPrice.toFixed(2)}</h2>
        <button>Proceed to Checkout</button>
      </div>
    </div>
    </>
  );
};
export default Cart;
