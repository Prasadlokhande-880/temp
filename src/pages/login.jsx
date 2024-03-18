import React, { Suspense, lazy } from 'react';

const LazyLogin = lazy(() => import('../components/login/login'));

const Login = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLogin />
      </Suspense>
    </div>
  );
};

export default Login;
