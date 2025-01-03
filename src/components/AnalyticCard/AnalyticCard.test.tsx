import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import AnalyticCard from './AnalyticCard';

describe('<AnalyticCard />', () => {
  test('it should mount', () => {
    render(
      <AnalyticCard
        title='Unique Visitors'
        changeDirection='up'
        value={4350}
        changeRate={18}
        unit='currency'
      />,
    );

    const analyticCardTest = screen.getByTestId('analyticCard');

    expect(analyticCardTest).toBeInTheDocument();
  });
});
