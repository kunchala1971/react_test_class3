import { render, screen } from '@testing-library/react';
import Class1 from '../Class1';

describe('App component', () => {
  test('renders button', () => {
    render(<Class1 />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
	test('renders  maindiv', () => {
    render(<Class1 />);
    const divElement = screen.getByTestId("maindiv")
    expect(divElement).toBeInTheDocument();
  });
	
});