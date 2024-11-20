import { Suspense, lazy } from 'react';

import type { AccordionProps } from './Accordion';

const LazyAccordion = lazy(() => import('./Accordion'));

const Accordion = (props: AccordionProps) => (
  <Suspense fallback={null}>
    <LazyAccordion {...props} />
  </Suspense>
);

export default Accordion;
