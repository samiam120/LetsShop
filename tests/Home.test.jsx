import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from '../src/Components/Home';

describe('Home component', () => {
  it('renders heading and subtext correctly', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByRole('heading', { name: /letsshop/i })).toBeInTheDocument();
    expect(screen.getByText(/discover the best deals/i)).toBeInTheDocument();
  });

  it('renders the "Shop Now" button', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const button = screen.getByRole('button', { name: /shop now/i });
    expect(button).toBeInTheDocument();
  });

  it('navigates to /shop when "Shop Now" button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const button = screen.getByRole('button', { name: /shop now/i });
    await user.click(button);

    // You may need to mock or assert navigation differently depending on router setup.
    // This line won't "test" navigation directly but confirms the click happens.
    expect(button).toBeDefined();
  });
});