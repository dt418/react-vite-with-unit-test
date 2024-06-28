import { render, screen } from '@testing-library/react';
import Alert from './Alert';

describe('<Alert />', () => {
  test('it should mount', () => {
    render(<Alert />);

    const AlertTest = screen.getByTestId('Alert');

    expect(AlertTest).toBeInTheDocument();
  });
});