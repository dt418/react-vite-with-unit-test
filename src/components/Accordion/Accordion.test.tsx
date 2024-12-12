import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Accordion from './Accordion';

describe('<Accordion />', () => {
  test('it should mount', () => {
    render(
      <Accordion
        type='single'
        items={[
          { value: '1', title: 'accordion 1', content: 'accordion content' },
        ]}
      />,
    );

    const accordionElement = screen.getByTestId('accordion');

    expect(accordionElement).toBeInTheDocument();
  });
});
