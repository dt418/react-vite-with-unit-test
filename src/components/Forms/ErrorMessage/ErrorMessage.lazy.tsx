import { Suspense, lazy } from 'react';

import type { ErrorMessageProps } from './ErrorMessage';

const LazyErrorMessage = lazy(() => import('./ErrorMessage'));

const ErrorMessage = (props: ErrorMessageProps) => (
  <Suspense fallback={null}>
    <LazyErrorMessage {...props} />
  </Suspense>
);

export default ErrorMessage;
