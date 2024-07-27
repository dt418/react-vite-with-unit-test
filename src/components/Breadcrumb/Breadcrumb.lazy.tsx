import { lazy, Suspense } from 'react';

import { BreadcrumbProps } from './Breadcrumb';

const LazyBreadcrumb = lazy(() => import('./Breadcrumb'));

const Breadcrumb = (props: BreadcrumbProps) => (
  <Suspense fallback={null}>
    <LazyBreadcrumb {...props} />
  </Suspense>
);

export default Breadcrumb;
