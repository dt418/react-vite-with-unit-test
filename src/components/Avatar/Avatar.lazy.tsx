import { lazy, Suspense } from 'react';

import { AvatarProps } from './Avatar';

const LazyAvatar = lazy(() => import('./Avatar'));

const Avatar = (props: AvatarProps) => (
  <Suspense fallback={null}>
    <LazyAvatar {...props} />
  </Suspense>
);

export default Avatar;
