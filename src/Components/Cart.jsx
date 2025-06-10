import { useContext } from 'react';
import { OutletContext } from '../App';
import CartItemCard from './CartItemCard';
const Cart = () => {
  const { cartState } = useContext(OutletContext);

  if (cartState.cart.length == 0)
    return <p>Your Cart is Empty, go shop and add some items!</p>;

  return (
    <div>
      {cartState.cart.map((item) => {
        return (
          <div key={item.id}>
            <CartItemCard item={item} />
          </div>
        );
      })}
      <hr />
      <h2>Total: {cartState.totalPrice.toFixed(2)}</h2>
    </div>
  );
};
export default Cart;
