import { Suspense, lazy } from 'react';

import type { InputProps } from './Input';

const LazyInput = lazy(() => import('./Input'));

const Input = (props: InputProps) => (
  <Suspense fallback={null}>
    <LazyInput {...props} />
  </Suspense>
);

export default Input;
