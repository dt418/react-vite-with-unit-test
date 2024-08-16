import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import SvgIcon from './SvgIcon';

describe('<SvgIcon />', () => {
  test('renders icon with default props', async () => {
    render(<SvgIcon icon="home" />);
    const iconElement = await waitFor(() => screen.getByTestId('svgIcon'));
    expect(iconElement).toBeInTheDocument();
  });

  test('renders icon with custom icon prop', async () => {
    render(<SvgIcon icon="accessibility" />);
    const iconElement = await waitFor(() => screen.getByTestId('svgIcon'));
    expect(iconElement).toBeInTheDocument();
  });

  test('renders icon with custom viewBox prop', async () => {
    render(<SvgIcon icon="home" viewBox="0 0 20 20" />);
    const iconElement = await waitFor(() => screen.getByTestId('svgIcon'));
    expect(iconElement).toHaveAttribute('viewBox', '0 0 20 20');
  });

  test('renders icon with custom size prop', async () => {
    render(<SvgIcon icon="home" size="2em" />);
    const iconElement = await waitFor(() => screen.getByTestId('svgIcon'));
    expect(iconElement).toHaveAttribute('width', '2em');
    expect(iconElement).toHaveAttribute('height', '2em');
  });

  test('renders icon with custom testId prop', async () => {
    render(<SvgIcon icon="home" testId="custom-test-id" />);
    const iconElement = await waitFor(() =>
      screen.getByTestId('custom-test-id'),
    );
    expect(iconElement).toBeInTheDocument();
  });

  test('renders icon with additional props', async () => {
    render(<SvgIcon icon="home" className="custom-class" />);
    const iconElement = await waitFor(() => screen.getByTestId('svgIcon'));
    expect(iconElement).toHaveClass('custom-class');
  });
});
