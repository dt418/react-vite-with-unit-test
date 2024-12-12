import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  it('renders progress bar with default percentage (0%)', () => {
    const { getByTestId } = render(<ProgressBar />);
    const progressBar = getByTestId('progressBar');
    expect(progressBar).toHaveClass(
      'relative block h-4.5 w-full rounded bg-meta-9 dark:bg-meta-4',
    );
    expect(progressBar.querySelector('div')).toHaveClass(
      'absolute left-0 top-0 flex h-full items-center justify-center rounded bg-primary text-xs font-medium text-white w-[0%]',
    );
  });

  it('renders progress bar with custom percentage (50%)', () => {
    const { getByTestId } = render(<ProgressBar percent={50} />);
    const progressBar = getByTestId('progressBar');
    expect(progressBar.querySelector('div')).toHaveClass(
      'absolute left-0 top-0 flex h-full items-center justify-center rounded bg-primary text-xs font-medium text-white w-[50%]',
    );
  });

  it('renders progress bar with additional CSS classes', () => {
    const className = 'text-base';
    const { getByTestId } = render(<ProgressBar className={className} />);
    const progressBar = getByTestId('progressBar');
    expect(progressBar).toHaveClass(
      `relative block h-4.5 w-full rounded bg-meta-9 dark:bg-meta-4 text-base ${className}`,
    );
  });

  it('renders progress bar with custom props (e.g. id, style)', () => {
    const color = 'red';
    const { getByTestId } = render(
      <ProgressBar id='custom-id' style={{ backgroundColor: color }} />,
    );
    const progressBar = getByTestId('progressBar');

    // Perform assertions
    expect(progressBar).toHaveAttribute('id', 'custom-id');
  });

  it('renders progress bar with invalid percentage (negative value)', () => {
    const { getByTestId } = render(<ProgressBar percent={-10} />);
    const progressBar = getByTestId('progressBar');
    expect(progressBar.querySelector('div')).toHaveClass(
      'absolute left-0 top-0 flex h-full items-center justify-center rounded bg-primary text-xs font-medium text-white w-[0%]',
    );
  });

  it('renders progress bar with invalid percentage (value greater than 100)', () => {
    const { getByTestId } = render(<ProgressBar percent={110} />);
    const progressBar = getByTestId('progressBar');
    expect(progressBar.querySelector('div')).toHaveClass(
      'absolute left-0 top-0 flex h-full items-center justify-center rounded bg-primary text-xs font-medium text-white w-[100%]',
    );
  });
});
