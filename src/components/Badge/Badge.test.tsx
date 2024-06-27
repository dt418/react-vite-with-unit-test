import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from './Badge';

describe('<Badge />', () => {
  test('it should mount', () => {
    render(<Badge variant='blue'>Badge</Badge>);
    const BadgeScreen = screen.getByTestId("Badge");

    expect(BadgeScreen).toBeInTheDocument();
  });
});