import { render, screen } from '@testing-library/react';
import App from './App';



describe('App Component', () => {
  test('Paragraph render test', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });

  test('List Item test', () => {
    render(<App />);
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});
