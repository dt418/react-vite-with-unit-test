import { Suspense, lazy } from 'react';

import type { AnalyticCardProps } from './AnalyticCard';

const LazyAnalyticCard = lazy(() => import('./AnalyticCard'));

const AnalyticCard = (props: AnalyticCardProps) => (
  <Suspense fallback={null}>
    <LazyAnalyticCard {...props} />
  </Suspense>
);

export default AnalyticCard;
