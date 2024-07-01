import React, { lazy, Suspense } from 'react';

const LazyBadges = lazy(() => import('./Badge'));

const Badges = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode },
) => (
  <Suspense fallback={null}>
    <LazyBadges {...props} variant="blue">
      {props.children}
    </LazyBadges>
  </Suspense>
);

export default Badges;
