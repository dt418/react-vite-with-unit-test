import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import ErrorMessage from './ErrorMessage';

describe('<ErrorMessage />', () => {
  test('renders null when error is falsy', () => {
    render(<ErrorMessage />);
    expect(screen.queryByTestId('errorMessage')).not.toBeInTheDocument();
  });

  test('renders error message with id and class name when error is truthy', () => {
    render(<ErrorMessage error="Test error" id="test-id" />);
    const errorMessage = screen.getByTestId('errorMessage');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveAttribute('id', 'test-id');
    expect(errorMessage).toHaveClass('mt-2 text-sm text-red-600');
  });

  test('renders children when provided', () => {
    render(<ErrorMessage error="Test error">Test children</ErrorMessage>);
    const errorMessage = screen.getByTestId('errorMessage');
    expect(errorMessage).toHaveTextContent('Test children');
  });

  test('renders error message when children are not provided', () => {
    render(<ErrorMessage error="Test error" />);
    const errorMessage = screen.getByTestId('errorMessage');
    expect(errorMessage).toHaveTextContent('Test error');
  });
});
