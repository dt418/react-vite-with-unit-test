import { lazy, Suspense } from 'react';

import { SwitchInputProps } from './SwitchInput';

const LazySwitchInput = lazy(() => import('./SwitchInput'));

const SwitchInput = (props: SwitchInputProps) => (
  <Suspense fallback={null}>
    <LazySwitchInput {...props} />
  </Suspense>
);

export default SwitchInput;
