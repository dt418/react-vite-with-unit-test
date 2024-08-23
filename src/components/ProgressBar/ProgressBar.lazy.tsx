import { lazy, Suspense } from 'react';

import { ProgressBarProps } from './ProgressBar';

const LazyProgressBar = lazy(() => import('./ProgressBar'));

const ProgressBar = (props: ProgressBarProps) => (
  <Suspense fallback={null}>
    <LazyProgressBar {...props} />
  </Suspense>
);

export default ProgressBar;
