import { lazy, Suspense } from 'react';

import { InputProps } from './Input';

const LazyInput = lazy(() => import('./Input'));

const Input = (props: InputProps) => (
  <Suspense fallback={null}>
    <LazyInput {...props} />
  </Suspense>
);

export default Input;
