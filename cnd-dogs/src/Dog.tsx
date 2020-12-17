import React from 'react';
interface DogProps {
  height: number;
  width: number;
}

const Dog: React.FC<DogProps> = ({ height, width }) => {
  return <img src={`https://placedog.net/${width}/${height}`} />;
};

export default Dog;
