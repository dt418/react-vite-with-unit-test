import { lazy, Suspense } from 'react';

import { SidebarProps } from './Sidebar';

const LazySidebar = lazy(() => import('./Sidebar'));

const SidebarSkeleton = () => {
  return (
    <div className="flex w-full max-w-xs animate-pulse flex-col space-y-4 p-4">
      <div className="h-4 w-3/4 rounded bg-gray-2 dark:bg-graydark"></div>
      <div className="h-4 rounded bg-gray-2 dark:bg-graydark"></div>
      <div className="h-4 w-5/6 rounded bg-gray-2 dark:bg-graydark"></div>
      <div className="h-4 w-3/4 rounded bg-gray-2 dark:bg-graydark"></div>
      <div className="h-4 rounded bg-gray-2 dark:bg-graydark"></div>
      <div className="h-4 w-5/6 rounded bg-gray-2 dark:bg-graydark"></div>
    </div>
  );
};
const Alert = (props: SidebarProps) => (
  <Suspense fallback={<SidebarSkeleton />}>
    <LazySidebar {...props} />
  </Suspense>
);

export default Alert;
