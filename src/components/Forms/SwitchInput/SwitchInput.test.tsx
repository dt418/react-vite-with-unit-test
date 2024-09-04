import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import SwitchInput from './SwitchInput';

describe('<SwitchInput />', () => {
  it('renders without label', () => {
    render(<SwitchInput />);
    expect(screen.getByTestId('switchInput')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<SwitchInput label="Toggle me" />);
    expect(screen.getByText('Toggle me')).toBeInTheDocument();
  });

  it('toggles switch and updates enabled state', () => {
    render(<SwitchInput />);
    const input = screen.getByRole('checkbox');
    fireEvent.click(input);
    expect(input).toBeChecked();
  });

  it('has correct id', () => {
    render(<SwitchInput id="switch-input" />);
    const label = screen.getByTestId('switchInput');
    expect(label).toHaveAttribute('id', 'switch-input');
  });

  it('applies className and style props', () => {
    render(<SwitchInput className="mt-2" style={{ color: 'red' }} />);
    const component = screen.getByTestId('switchInput');
    expect(component).toHaveClass('mt-2');
    expect(component).toHaveStyle('color: rgb(255, 0, 0)');
  });
});
