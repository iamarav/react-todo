import React, { lazy, Suspense } from 'react';

const LazyAllTasks = lazy(() => import('./AllTasks'));

const AllTasks = props => (
  <Suspense fallback={null}>
    <LazyAllTasks {...props} />
  </Suspense>
);

export default AllTasks;
