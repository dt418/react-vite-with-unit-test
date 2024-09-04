import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import SwitchInput from './SwitchInput';

describe('<SwitchInput />', () => {
  test('it should mount', () => {
    render(<SwitchInput />);

    const switchInputTest = screen.getByTestId('switchInput');

    expect(switchInputTest).toBeInTheDocument();
  });
});
