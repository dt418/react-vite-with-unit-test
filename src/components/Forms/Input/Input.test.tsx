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
      'w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500',
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
