import { lazy, Suspense } from 'react';

import { HeadingProps } from './Heading';

const LazyHeading = lazy(() => import('./Heading'));

const Heading = (props: HeadingProps) => (
  <Suspense fallback={null}>
    <LazyHeading {...props} />
  </Suspense>
);

export default Heading;
