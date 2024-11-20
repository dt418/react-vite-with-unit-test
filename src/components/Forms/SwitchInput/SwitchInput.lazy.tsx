import { Suspense, lazy } from 'react';

import type { SwitchInputProps } from './SwitchInput';

const LazySwitchInput = lazy(() => import('./SwitchInput'));

const SwitchInput = (props: SwitchInputProps) => (
  <Suspense fallback={null}>
    <LazySwitchInput {...props} />
  </Suspense>
);

export default SwitchInput;
