import React from 'react';
import Cat from './Cat';

const App: React.FC = () => {
  return (
    <>
      <h1>Cats</h1>
      <Cat height={200} width={300} />
      <Cat height={200} width={200} />
      <Cat height={200} width={100} />
    </>
  );
};

export default App;
