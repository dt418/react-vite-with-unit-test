import { Suspense, lazy } from 'react';

import type { TooltipProps } from './Tooltip';

const LazyTooltip = lazy(() => import('./Tooltip'));

const Tooltip = (props: TooltipProps) => (
  <Suspense fallback={null}>
    <LazyTooltip {...props} />
  </Suspense>
);

export default Tooltip;
