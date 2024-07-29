import { lazy, Suspense } from 'react';

import { SidebarProps } from './Sidebar';

const LazySidebar = lazy(() => import('./Sidebar'));

const SidebarSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col space-y-4 p-4 max-w-xs w-full">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
  );
};
const Alert = (props: SidebarProps) => (
  <Suspense fallback={<SidebarSkeleton />}>
    <LazySidebar {...props} />
  </Suspense>
);

export default Alert;
