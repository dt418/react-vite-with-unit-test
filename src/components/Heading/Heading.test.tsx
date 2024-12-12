import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import Heading from './Heading';

describe('Heading Component', () => {
  it('renders with default props', () => {
    render(<Heading>Default Heading</Heading>);
    const heading = screen.getByText('Default Heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('font-bold text-4xl text-black m-0');
  });

  it('renders with custom `as` prop', () => {
    render(<Heading as='h2'>Custom Heading Level 2</Heading>);
    const heading = screen.getByText('Custom Heading Level 2');
    expect(heading.tagName).toBe('H2');
    expect(heading).toHaveClass('font-bold text-3xl text-black m-0');
  });

  it('renders with custom `weight` prop', () => {
    render(<Heading weight='light'>Light Weight Heading</Heading>);
    const heading = screen.getByText('Light Weight Heading');
    expect(heading).toHaveClass('font-light');
  });

  it('renders with custom `color` prop', () => {
    render(<Heading color='blue'>Blue Heading</Heading>);
    const heading = screen.getByText('Blue Heading');
    expect(heading).toHaveClass('text-blue-500');
  });

  it('renders with custom `margin` prop', () => {
    render(<Heading margin='md'>Heading with Margin</Heading>);
    const heading = screen.getByText('Heading with Margin');
    expect(heading).toHaveClass('m-4');
  });

  it('combines custom props correctly', () => {
    render(
      <Heading as='h3' weight='medium' color='red' margin='lg'>
        Combined Props Heading
      </Heading>,
    );
    const heading = screen.getByText('Combined Props Heading');
    expect(heading.tagName).toBe('H3');
    expect(heading).toHaveClass('font-medium text-2xl text-red-500 m-6');
  });
});
