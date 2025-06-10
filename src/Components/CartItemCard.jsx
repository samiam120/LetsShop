import { useContext } from 'react';
import { OutletContext } from '../App';

const CartItemCard = ({ item }) => {
  const { removeFromCart } = useContext(OutletContext);

  return (
    <div>
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.price * item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Remvove From Cart</button>
    </div>
  );
};

export default CartItemCard;