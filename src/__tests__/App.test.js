import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('renders label content', () => {
    render(<App />);
    const contentElement = screen.getByLabelText('content');
    expect(contentElement).toBeInTheDocument();
  });

  test('renders Hello Text', () => {
    render(<App />);
    const helloElement = screen.getByText('Hello');
    expect(helloElement).toBeInTheDocument();
  });
  test('renders username test by id', () => {
    render(<App />);
    const usernameElement = screen.getByTestId('username');
    expect(usernameElement).toBeInTheDocument();
  });
  test('renders username by placeholder', () => {
    render(<App />);
    const usernameplaceholderElement =
      screen.getByPlaceholderText('Enter User Name');
    expect(usernameplaceholderElement).toBeInTheDocument();
  });
  test('renders username get by Role', () => {
    render(<App />);
    const usernamegetbyroleElement = screen.getByRole('textbox');
    expect(usernamegetbyroleElement).toBeInTheDocument();
  });
  test('renders save button', () => {
    render(<App />);
    const savebuttonElement = screen.getByRole('button');
    expect(savebuttonElement).toBeInTheDocument();
    expect(savebuttonElement).toHaveTextContent('Save');
  });
  test('renders save button with name', () => {
    render(<App />);
    const savebuttonElement = screen.getByRole('button', { name: 'Save' });
    expect(savebuttonElement).toBeInTheDocument();
  });
  test('renders save button get by text', () => {
    render(<App />);
    const savebuttonElement = screen.getByText('Save');
    expect(savebuttonElement).toBeInTheDocument();
  });
});
