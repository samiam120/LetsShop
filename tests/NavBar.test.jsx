import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../src/Components/NavBar';

describe('NavBar component', () => {
  it('renders logo and navigation links', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    // Check for logo
    expect(screen.getByText('🛍️')).toBeInTheDocument();

    // Check for Home, Shop, and Cart links
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Shop' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Cart' })).toBeInTheDocument();
  });
});