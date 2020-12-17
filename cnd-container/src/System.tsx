import React from 'react';
import useDynamicScript from './hooks/useDynamicScript';
import loadComponent from './utils/loadComponent';

export interface SystemType {
  module: string;
  scope: string;
  url: string;
}

interface SystemProps {
  system: SystemType;
}

const System: React.FC<SystemProps> = ({ system: { module, scope, url } }) => {
  const { loading, error } = useDynamicScript({ url });

  if (loading) {
    return <h2>Loading dynamic script: {url}</h2>;
  }

  if (error) {
    return <h2>Failed to load dynamic script: {url}</h2>;
  }

  const Component = React.lazy(loadComponent(scope, module));

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  );
};

export default System;
