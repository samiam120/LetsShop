import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cart from '../src/Components/Cart';
import { OutletContext } from '../src/App';

const mockCartItem = {
  id: 1,
  title: 'Test Product',
  price: 10,
  quantity: 2,
  image: 'https://via.placeholder.com/150',
};

describe('Cart component', () => {
  it('shows empty cart message when cart is empty', () => {
    const cartState = { cart: [], totalPrice: 0, totalItems: 0 };

    render(
      <OutletContext.Provider value={{ cartState }}>
        <Cart />
      </OutletContext.Provider>
    );

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it('renders cart items and total price when cart has items', () => {
    const cartState = {
      cart: [mockCartItem],
      totalPrice: mockCartItem.price * mockCartItem.quantity,
      totalItems: 2,
    };

    render(
      <OutletContext.Provider value={{ cartState }}>
        <Cart />
      </OutletContext.Provider>
    );

    expect(screen.getByText(/test product/i)).toBeInTheDocument();
    expect(screen.getByText(/total: 20.00/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /proceed to checkout/i })).toBeInTheDocument();
  });
});