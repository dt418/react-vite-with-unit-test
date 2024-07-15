import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Accordion from './Accordion';

describe('<Accordion />', () => {
  test('it should mount', () => {
    render(<Accordion items={[]} />);

    const accordionElement = screen.getByTestId('accordion');

    expect(accordionElement).toBeInTheDocument();
  });
});
