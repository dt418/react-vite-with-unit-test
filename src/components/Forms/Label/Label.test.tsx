import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { cn } from '@/utils/cn';

import Label from './Label';

describe('<Label />', () => {
  test('renders label with required prop', () => {
    render(<Label label="Test Label" htmlFor="test" required />);
    const label = screen.getByTestId('label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('block text-sm font-medium text-gray-700');
    expect(label).toHaveTextContent('Test Label*');
  });

  test('renders label without required prop', () => {
    render(<Label label="Test Label" htmlFor="test" />);
    const label = screen.getByTestId('label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('block text-sm font-medium text-gray-700');
    expect(label).toHaveTextContent('Test Label');
  });

  test('renders label with custom className', () => {
    const customClassName = 'mt-2';
    render(
      <Label label="Test Label" htmlFor="test" className={customClassName} />,
    );
    const label = screen.getByTestId('label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass(
      cn('block text-sm font-medium text-gray-700', customClassName),
    );
  });

  test('renders label with htmlFor prop', () => {
    render(<Label label="Test Label" htmlFor="test-input" />);
    const label = screen.getByTestId('label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('for', 'test-input');
  });

  test('renders label with label prop', () => {
    render(<Label label="Test Label" htmlFor="test" />);
    const label = screen.getByTestId('label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent('Test Label');
  });
});
