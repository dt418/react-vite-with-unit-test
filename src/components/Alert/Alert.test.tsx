import { render, screen } from '@testing-library/react';

import Alert from './Alert';

describe('<Alert />', () => {
  test('it should mount', () => {
    render(
      <Alert title='Alert title' type='warning' message='Alert message' />,
    );
    const alertElement = screen.getByTestId('alert');
    expect(alertElement).toBeInTheDocument();
  });

  test('renders the alert with the correct title and message', () => {
    render(
      <Alert title='Alert title' type='warning' message='Alert message' />,
    );
    const titleElement = screen.getByText('Alert title');
    const messageElement = screen.getByText('Alert message');
    expect(titleElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
  });

  test('renders the alert with default type when type is not provided', () => {
    render(<Alert title='Alert title' message='Alert message' />);
    const alertElement = screen.getByTestId('alert');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveClass('bg-info');
  });
});
