import { useState, createContext, useEffect } from 'react';
import NavBar from './Components/NavBar';
import { Outlet } from 'react-router-dom';
import styles from './styles/app.module.css'

export const OutletContext = createContext();

const App = () => {
  const [cartState, updateCartState] = useState({
    cart: [], //id, title, price, quantity
    totalItems: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    console.log('Cart updated', cartState);
  }, [cartState]);

  const addToCart = (item) => {
    let itemExists = null;
    for (const cartItem of cartState.cart) {
      if (cartItem.id === item.id) {
        itemExists = cartItem;
        break;
      }
    }

    if (itemExists) {
      updateCartState({
        ...cartState,
        cart: cartState.cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
            };
          }
          return cartItem;
        }),
        totalItems: cartState.totalItems + item.quantity,
        totalPrice: cartState.totalPrice + (item.price * item.quantity),
      });
    } else {
      updateCartState({
        ...cartState,
        cart: [...cartState.cart, item],
        totalItems: cartState.totalItems + item.quantity,
        totalPrice: cartState.totalPrice + (item.price * item.quantity),
      });
    }
  };

  const removeFromCart = (itemId) => {
    updateCartState({
      ...cartState,
      cart: cartState.cart.filter((item) => item.id !== itemId),
      totalItems: cartState.totalItems - 1,
      totalPrice:
        cartState.totalPrice -
        cartState.cart.find((item) => item.id === itemId).price,
    });
  };

  return (
    <>
      <div className={styles.appContainer}>
        <NavBar />
        <OutletContext.Provider
          value={{ cartState, updateCartState, addToCart, removeFromCart }}
        >
          <Outlet />
        </OutletContext.Provider>
      </div>
    </>
  );
};

export default App;
