import { Suspense, lazy } from 'react';

import type { HeadingProps } from './Heading';

const LazyHeading = lazy(() => import('./Heading'));

const Heading = (props: HeadingProps) => (
  <Suspense fallback={null}>
    <LazyHeading {...props} />
  </Suspense>
);

export default Heading;
