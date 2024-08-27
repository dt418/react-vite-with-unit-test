import { lazy, Suspense } from 'react';

import { ErrorMessageProps } from './ErrorMessage';

const LazyErrorMessage = lazy(() => import('./ErrorMessage'));

const ErrorMessage = (props: ErrorMessageProps) => (
  <Suspense fallback={null}>
    <LazyErrorMessage {...props} />
  </Suspense>
);

export default ErrorMessage;
