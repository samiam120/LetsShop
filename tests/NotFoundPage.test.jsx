import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from '../src/Components/NotFoundPage';

describe('NotFoundPage component', () => {
  it('renders the not found message and link', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    // Check for heading text
    expect(
      screen.getByRole('heading', { name: /not found page/i })
    ).toBeInTheDocument();

    // Check for navigation link back to home
    expect(
      screen.getByRole('link', { name: /go back home/i })
    ).toBeInTheDocument();
  });
});
