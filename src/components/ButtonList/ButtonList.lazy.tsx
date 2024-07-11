import { lazy, Suspense } from 'react';

import { ButtonListProps } from './ButtonList';

const LazyButtonList = lazy(() => import('./ButtonList'));

const ButtonList = (props: ButtonListProps) => (
  <Suspense fallback={null}>
    <LazyButtonList {...props} />
  </Suspense>
);

export default ButtonList;
