import { Suspense, lazy } from 'react';

import type { ProgressBarProps } from './ProgressBar';

const LazyProgressBar = lazy(() => import('./ProgressBar'));

const ProgressBar = (props: ProgressBarProps) => (
  <Suspense fallback={null}>
    <LazyProgressBar {...props} />
  </Suspense>
);

export default ProgressBar;
