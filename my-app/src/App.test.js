import React from 'react';
import { render } from '@testing-library/react';
import App, { ball, hit } from './App';
import expectExport from 'expect';

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

// test('hit resets both balls and strikes counter', () => {
//   expect(hit()).toStrictEqual({balls: 0, strikes: 0});
// })

// const hit = () => {
//   setStrikes(0);
//   setBalls(0);
// }

// test('the fourth ball resets the ball count to zero', () => {
//   expect(ball(3)).toBe(0);
// })

// const ball = () => {
//   if (balls < 3) {
//     setBalls(balls + 1);
//   } else if (balls === 3) {
//     setBalls(0);
//     setStrikes(0);
//   }
// }