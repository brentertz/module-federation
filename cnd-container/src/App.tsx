import React from 'react';

const Cats = React.lazy(() => import('cats/App'));
const Dogs = React.lazy(() => import('dogs/App'));

const App: React.FC = () => {
  return (
    <div>
      <h1>Cats &amp; Dogs</h1>
      <React.Suspense fallback="Loading cats...">
        <Cats />
      </React.Suspense>
      <React.Suspense fallback="Loading dogs...">
        <Dogs />
      </React.Suspense>
    </div>
  );
};

export default App;
