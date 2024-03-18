import React, { Suspense, lazy } from 'react';

const LazySignUp = lazy(() => import('../components/signUp/signup'));

const SignUp = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazySignUp />
      </Suspense>
    </div>
  );
};

export default SignUp;
