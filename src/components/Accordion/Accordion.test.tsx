import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Accordion from './Accordion';

describe('<Accordion />', () => {
  test('it should mount', () => {
    render(<Accordion items={[]}/>);

    const AccordionTest = screen.getByTestId('Accordion');

    expect(AccordionTest).toBeInTheDocument();
  });
});