import { Suspense, lazy } from 'react';

import type { WorldMapProps } from './WorldMap';

const LazyWorldMap = lazy(() => import('./WorldMap'));

const WorldMapSkeleton = () => (
  <div className="animate-pulse">
    <div className="aspect-square max-h-[500px] w-full rounded bg-gray dark:bg-graydark"></div>
  </div>
);

const WorldMap = (props: WorldMapProps) => (
  <Suspense fallback={<WorldMapSkeleton />}>
    <LazyWorldMap {...props} />
  </Suspense>
);

export default WorldMap;
