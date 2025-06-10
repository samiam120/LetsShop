import { useContext, useState } from 'react';
import { OutletContext } from '../App';

const ItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(OutletContext);

  return (
    <div>
      <div className="img-container">
        <img src={item.image} alt={item.title} />
      </div>
      <h1>{item.title}</h1>
      <p>{item.price}</p>
      <button onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}>
        Quantity: {quantity}
      </button>
      <button onClick={() => addToCart({ ...item, quantity })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
