import { useContext } from 'react';
import { OutletContext } from '../App';
import styles from '../styles/cartitemcard.module.css';

const CartItemCard = ({ item }) => {
  const { removeFromCart } = useContext(OutletContext);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={item.image} alt={item.title} />
      </div>
      <div className={styles.card}>
        <h2>{item.title}</h2>
        <p className={styles.price}>Price: ${item.price}</p>
        <p clasName={styles.quantity}>Quantity: {item.quantity}</p>
        <p className={styles.total}>Total: ${item.price * item.quantity}</p>
        <button className={styles.removeButton} onClick={() => removeFromCart(item.id)}>Remvove From Cart</button>
      </div>
    </div>
  );
};

export default CartItemCard;
