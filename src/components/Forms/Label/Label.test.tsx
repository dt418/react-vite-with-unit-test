import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { cn } from '@/utils/cn';

import Label from './Label';

describe('<Label />', () => {
  test('renders label with required prop', () => {
    render(<Label label="Test Label" htmlFor="test" required />);
    const label = screen.getByTestId('label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('mb-3 block text-black dark:text-white');
    expect(label).toHaveTextContent('Test Label*');
  });

  test('renders label without required prop', () => {
    render(<Label label="Test Label" htmlFor="test" />);
    const label = screen.getByTestId('label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('mb-3 block text-black dark:text-white');
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
      cn('mb-3 block text-black dark:text-white', customClassName),
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
