import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders my app without crashing', () => {
  render(<App />);
});

test('shows the correct display text', () => {
  const { getByText } = render(<App />);
  getByText(/balls/i)
  getByText(/strikes/i)
})

test('the dashboard shows the correct buttons', () => {
  const { getByText } = render(<App />);
  getByText(/foul ball!/i)
  getByText(/hit!/i)
})