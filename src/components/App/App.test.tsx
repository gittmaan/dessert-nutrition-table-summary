import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application correctly', () => {
  render(<App />);
  const titleElement = screen.getByText(/Nutrition List/i);
  expect(titleElement).toBeInTheDocument();
});
