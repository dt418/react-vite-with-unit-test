import { lazy, Suspense } from 'react';

import { TooltipProps } from './Tooltip';

const LazyTooltip = lazy(() => import('./Tooltip'));

const Tooltip = (props: TooltipProps) => (
  <Suspense fallback={null}>
    <LazyTooltip {...props} />
  </Suspense>
);

export default Tooltip;
