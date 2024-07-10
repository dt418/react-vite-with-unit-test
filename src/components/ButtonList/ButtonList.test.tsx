import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import ButtonList from './ButtonList';

describe('<ButtonList />', () => {
  test('it should mount', () => {
    render(<ButtonList buttons={[]} />);

    const ButtonListTest = screen.getByTestId('ButtonList');

    expect(ButtonListTest).toBeInTheDocument();
  });
});
