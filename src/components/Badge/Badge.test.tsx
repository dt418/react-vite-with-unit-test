import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Badge from './Badge';

describe('<Badge />', () => {
  test('it should mount', () => {
    render(<Badge variant='blue'>Badge</Badge>);
    const BadgeScreen = screen.getByTestId('badge');

    expect(BadgeScreen).toBeInTheDocument();
  });
});
