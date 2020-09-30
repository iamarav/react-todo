import React, { lazy, Suspense } from 'react';

const LazyTaskAppComponent = lazy(() => import('./TaskAppComponent'));

const TaskAppComponent = props => (
  <Suspense fallback={null}>
    <LazyTaskAppComponent {...props} />
  </Suspense>
);

export default TaskAppComponent;
