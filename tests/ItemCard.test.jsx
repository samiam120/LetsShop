import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemCard from '../src/Components/ItemCard';
import { OutletContext } from '../src/App';

describe('ItemCard component', () => {
  const mockItem = {
    id: 1,
    title: 'Test Product',
    price: 25.99,
    image: 'https://via.placeholder.com/150',
  };

  const renderComponent = (addToCart = vi.fn()) => {
    render(
      <OutletContext.Provider value={{ addToCart }}>
        <ItemCard item={mockItem} />
      </OutletContext.Provider>
    );
  };

  it('renders item title, price, and image', () => {
    renderComponent();

    expect(
      screen.getByRole('heading', { name: /test product/i })
    ).toBeInTheDocument();
    expect(screen.getByText('25.99')).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /test product/i })
    ).toBeInTheDocument();
  });

  it('increments quantity when quantity button is clicked', async () => {
    const user = userEvent.setup();
    renderComponent();

    const quantityButton = screen.getByRole('button', { name: /quantity: 1/i });
    await user.click(quantityButton);

    expect(
      screen.getByRole('button', { name: /quantity: 2/i })
    ).toBeInTheDocument();
  });

  it('calls addToCart with correct item and quantity when "Add to Cart" is clicked', async () => {
    const user = userEvent.setup();
    const addToCart = vi.fn();
    renderComponent(addToCart);

    const addToCartBtn = screen.getByRole('button', { name: /add to cart/i });
    await user.click(addToCartBtn);

    expect(addToCart).toHaveBeenCalledWith({ ...mockItem, quantity: 1 });
  });

  it('shows spinner while loading and disables buttons', async () => {
    const user = userEvent.setup();
    renderComponent();

    const addToCartBtn = screen.getByRole('button', { name: /add to cart/i });
    await user.click(addToCartBtn);

    // Wait for the spinner to appear
    const spinner = await screen.findByTestId('spinner');

    expect(addToCartBtn).toBeDisabled();
    expect(spinner).toBeInTheDocument();
  });
});
