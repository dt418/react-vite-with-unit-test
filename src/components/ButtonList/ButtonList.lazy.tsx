import React, { lazy, Suspense } from 'react';

const LazyButtonList = lazy(() => import('./ButtonList'));

const ButtonList = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazyButtonList {...props} buttons={[]} />
  </Suspense>
);

export default ButtonList;
