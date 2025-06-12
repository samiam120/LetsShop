

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CartItemCard from '../src/Components/CartItemCard';
import { OutletContext } from '../src/App';

describe('CartItemCard', () => {
  const mockRemoveFromCart = vi.fn();
  const mockItem = {
    id: 1,
    title: 'Test Product',
    price: 10,
    quantity: 2,
    image: 'https://via.placeholder.com/150',
  };

  const renderWithContext = () => {
    return render(
      <OutletContext.Provider value={{ removeFromCart: mockRemoveFromCart }}>
        <CartItemCard item={mockItem} />
      </OutletContext.Provider>
    );
  };

  it('renders the item details correctly', () => {
    renderWithContext();
    expect(screen.getByRole('heading', { name: /test product/i })).toBeInTheDocument();
    expect(screen.getByText(/price: \$10/i)).toBeInTheDocument();
    expect(screen.getByText(/quantity: 2/i)).toBeInTheDocument();
    expect(screen.getByText(/total: \$20/i)).toBeInTheDocument();
  });

  it('calls removeFromCart with correct id when button is clicked', () => {
    renderWithContext();
    screen.getByRole('button', { name: /remove from cart/i }).click();
    expect(mockRemoveFromCart).toHaveBeenCalledWith(1);
  });
});