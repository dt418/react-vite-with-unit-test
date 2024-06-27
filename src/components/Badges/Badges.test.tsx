import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BadgesComponent from './Badges';

describe('<Badges />', () => {
  test('it should mount', () => {
    render(<BadgesComponent variant='blue'>Badge</BadgesComponent>);
    const Badges = screen.getByTestId("Badges");

    expect(Badges).toBeInTheDocument();
  });
});