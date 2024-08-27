import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Input from './Input';

describe('Input component', () => {
  test('renders the input with the correct attributes', () => {
    render(
      <Input
        label="Test Label"
        id="test-input"
        helperText="Helper text"
        required
      />,
    );

    // Check if the input renders with the correct attributes
    const inputElement = screen.getByTestId('input');
    expect(inputElement).toHaveAttribute('id', 'test-input');
    expect(inputElement).toHaveAttribute('aria-invalid', 'false');
    expect(inputElement).toHaveAttribute(
      'aria-describedby',
      'test-input-helper',
    );
    expect(inputElement).toHaveAttribute('aria-required', 'true');
    expect(inputElement).toHaveClass(
      'mt-1 block w-full rounded-md border-gray-300 p-2 text-form-input shadow-sm sm:text-sm',
    );
  });

  test('renders the helper text correctly', () => {
    render(
      <Input label="Test Label" id="test-input" helperText="Helper text" />,
    );

    // Check if the helper text renders correctly
    const helperTextElement = screen.getByText('Helper text');
    expect(helperTextElement).toBeInTheDocument();
    expect(helperTextElement).toHaveClass(
      'mt-2 text-sm text-gray dark:text-gray-2',
    );
  });
});
