import { Suspense, lazy } from 'react';

import type { AlertProps } from './Alert';

const LazyAlert = lazy(() => import('./Alert'));

const Alert = (props: AlertProps) => (
  <Suspense fallback={null}>
    <LazyAlert {...props} />
  </Suspense>
);

export default Alert;
