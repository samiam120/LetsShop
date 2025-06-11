import { Link } from 'react-router-dom';
import styles from '../styles/home.module.css';
const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.heading}>LetsShop 🛍️</h1>
      <p className={styles.subtext}>
        Discover the best deals on your favorite produtcts
      </p>
      <Link to="/shop">
        <button className={styles.ctaBtn}>Shop Now</button>
      </Link>
    </div>
  );
};

export default Home;
