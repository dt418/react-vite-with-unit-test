import { forwardRef, lazy, Suspense } from 'react';

import { SvgIconProps } from './SvgIcon';

const LazySvgIcon = lazy(() => import('./SvgIcon'));

const SvgIcon = forwardRef<SVGSVGElement | null, SvgIconProps>((props, ref) => (
  <Suspense fallback={<span>Loading...</span>}>
    <LazySvgIcon {...props} ref={ref} />
  </Suspense>
));

export default SvgIcon;
