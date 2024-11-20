import type React from 'react';
import { Suspense, lazy } from 'react';

const LazyButton = lazy(() => import('./Button'));

const Button = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazyButton {...props} />
  </Suspense>
);

export default Button;
