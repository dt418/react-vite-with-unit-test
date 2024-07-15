import { render, screen } from '@testing-library/react';

import Alert from './Alert';

describe('<Alert />', () => {
  test('it should mount', () => {
    render(<Alert />);

    const AlertTest = screen.getByTestId('alert');

    expect(AlertTest).toBeInTheDocument();
  });
});
