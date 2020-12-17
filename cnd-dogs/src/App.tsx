import React from 'react';
import Dog from './Dog';

const App: React.FC = () => {
  return (
    <>
      <h1>Dogs</h1>
      <Dog height={200} width={300} />
      <Dog height={200} width={200} />
      <Dog height={200} width={100} />
    </>
  );
};

export default App;
