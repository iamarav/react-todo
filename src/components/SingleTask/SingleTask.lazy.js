import React, { lazy, Suspense } from 'react';

const LazySingleTask = lazy(() => import('./SingleTask'));

const SingleTask = props => (
  <Suspense fallback={null}>
    <LazySingleTask {...props} />
  </Suspense>
);

export default SingleTask;
