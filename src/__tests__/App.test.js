import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('renders label content', () => {
    render(<App />);
    const googleLink = screen.getByRole('link');
    expect(googleLink).toBeInTheDocument();
  });
  test('renders label content', () => {
    render(<App />);
    const googleLinkId = screen.getByTestId('mylink');
    expect(googleLinkId).toBeInTheDocument();
  });
  test('renders Hello Text', () => {
    render(<App />);
    const helloElement = screen.getByText('Hello');
    expect(helloElement).toBeInTheDocument();
  });
	test('renders Hello1 Text', () => {
    render(<App />);
    const hello1Element = screen.getByText('Hello1');
    expect(hello1Element).toBeInTheDocument();
  });
	test('renders Hello2 Text', () => {
    render(<App />);
    const hello2Element = screen.getByText('Hello2');
    expect(hello2Element).toBeInTheDocument();
  });
	test('renders Hello3 Text', () => {
    render(<App />);
    const hello3Element = screen.getByText('Hello3');
    expect(hello3Element).toBeInTheDocument();
  });
	test('renders Hai  Text', () => {
    render(<App />);
    const haiElement = screen.getAllByText('Hai');
    expect(haiElement).toHaveLength(4);
  });

  test('renders username by placeholder', () => {
    render(<App />);
    const usernameplaceholderElement =
      screen.getByPlaceholderText('Enter User Name');
    expect(usernameplaceholderElement).toBeInTheDocument();
  });
  test('renders username get by Role', () => {
    render(<App />);
    const userNameTextBox = screen.getByRole('textbox');
    expect(userNameTextBox).toBeInTheDocument();
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
