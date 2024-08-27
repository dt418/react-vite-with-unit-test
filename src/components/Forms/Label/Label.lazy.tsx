import { lazy, Suspense } from 'react';

import { LabelProps } from './Label';

const LazyLabel = lazy(() => import('./Label'));

const Label = (props: LabelProps) => (
  <Suspense fallback={null}>
    <LazyLabel {...props} />
  </Suspense>
);

export default Label;
