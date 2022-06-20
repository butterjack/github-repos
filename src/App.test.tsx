import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import LandingPage from './pages/LandingPage';

test("renders landing page", () => {
  render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>
  );
  const title = screen.getByTestId("landing-title");
  const paragraph = screen.getByTestId("landing-paragraph");

  expect(title).toBeInTheDocument();
  expect(paragraph).toBeInTheDocument();
});
