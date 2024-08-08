import { lazy, Suspense } from 'react';

import { WorldMapProps } from './WorldMap';

const LazyWorldMap = lazy(() => import('./WorldMap'));

const WorldMap = (props: WorldMapProps) => (
  <Suspense fallback={null}>
    <LazyWorldMap {...props} />
  </Suspense>
);

export default WorldMap;
