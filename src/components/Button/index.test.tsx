import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import Button from './index';

afterEach(cleanup)

test('renders button correctly', () => {
  render(<Button>Click me!</Button>);
  const button = screen.getByText(/Click me!/i);
  expect(button).toBeInTheDocument();
});

test('onClick works', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me!</Button>)
    const button = screen.getByText(/Click me!/i);
    fireEvent.click(button);
    expect(onClick).toBeCalled();
})

test('renders icon', () => {
    const { getByTestId } = render(<Button icon={'done'}>Click me!</Button>)
    const icon = getByTestId('icon')
    expect(icon).toBeInTheDocument();
})