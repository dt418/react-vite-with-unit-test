import React, { lazy, Suspense } from "react";

const LazyAlert = lazy(() => import("./Alert"));

const Alert = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyAlert {...props}/>
  </Suspense>
);

export default Alert;
