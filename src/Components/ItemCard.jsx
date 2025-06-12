import styles from '../styles/itemcard.module.css';
import { useContext, useState } from 'react';
import { OutletContext } from '../App';

const ItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(OutletContext);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.card}>
      <div>
        {<img src={item.image} alt={item.title} className={styles.image} />}
      </div>
      <h1 className={styles.cardTitle}>{item.title}</h1>
      <p className={styles.price}>{item.price}</p>

      <div className={styles.buttons}>
        <button
          className={styles.quantityButton}
          disabled={isLoading}
          onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
        >
          Quantity: {quantity}
        </button>
        <button
          className={styles.addToCartBtn}
          disabled={isLoading}
          onClick={() => {
            setIsLoading(true);
            addToCart({ ...item, quantity });
            setTimeout(() => {
              setIsLoading(false);
            }, 2000);
          }}
        >
          {isLoading ? (
            <span data-testid="spinner" className={styles.spinner}></span>
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
