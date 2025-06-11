import styles from "../styles/shop.module.css"
import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

const Shop = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Server error');
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading</p>;
  if (error) return <p>A network error was encountered</p>;
  return (
    <div className={styles.shop}>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ItemCard item={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
