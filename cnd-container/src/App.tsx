import React from 'react';
import System, { SystemType } from './System';

const App: React.FC = () => {
  const [system, setSystem] = React.useState<SystemType | undefined>(undefined);

  const loadCats = () => {
    setSystem({
      url: 'http://localhost:3001/remoteEntry.js',
      scope: 'cats',
      module: './App',
    });
  };

  const loadDogs = () => {
    setSystem({
      url: 'http://localhost:3002/remoteEntry.js',
      scope: 'dogs',
      module: './App',
    });
  };

  return (
    <div>
      <h1>Cats &amp; Dogs</h1>
      <button onClick={loadCats}>Load Cats</button>
      <button onClick={loadDogs}>Load Dogs</button>
      {system && <System system={system} />}
    </div>
  );
};

export default App;
