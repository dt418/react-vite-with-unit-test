import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Button from './Button';

describe('<Button />', () => {
  test('it should mount', () => {
    render(<Button />);

    const ButtonTest = screen.getByTestId('Button');

    expect(ButtonTest).toBeInTheDocument();
  });
});
