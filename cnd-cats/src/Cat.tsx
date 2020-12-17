import React from 'react';

interface CatProps {
  height: number;
  width: number;
}

const Cat: React.FC<CatProps> = ({ height, width }) => {
  return <img src={`https://placekitten.com/${width}/${height}`} />;
};

export default Cat;
