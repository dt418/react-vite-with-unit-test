import { lazy, Suspense } from 'react';

import { WorldMapProps } from './WorldMap';

const LazyWorldMap = lazy(() => import('./WorldMap'));

const WorldMapSkeleton = () => (
  <div className="animate-pulse">
    <div className="w-full aspect-square max-h-[500px] bg-gray dark:bg-graydark rounded"></div>
  </div>
);

const WorldMap = (props: WorldMapProps) => (
  <Suspense fallback={<WorldMapSkeleton />}>
    <LazyWorldMap {...props} />
  </Suspense>
);

export default WorldMap;
